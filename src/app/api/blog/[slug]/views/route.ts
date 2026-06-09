import { NextResponse } from "next/server";
import { allPosts } from "contentlayer/generated";
import { promises as fs } from "fs";
import path from "path";

const VIEW_DATA_PATH = path.join(process.cwd(), ".data", "views.json");

// Initialize view data file
async function initializeViewData() {
  try {
    await fs.mkdir(path.dirname(VIEW_DATA_PATH), { recursive: true });
    const exists = await fs.access(VIEW_DATA_PATH).then(() => true).catch(() => false);
    if (!exists) {
      await fs.writeFile(VIEW_DATA_PATH, "{}");
    }
  } catch {
    // If we can't write to file, use in-memory fallback
  }
}

// Get all views
async function getAllViews(): Promise<Record<string, number>> {
  try {
    await initializeViewData();
    const data = await fs.readFile(VIEW_DATA_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return {};
  }
}

// Save views
async function saveViews(views: Record<string, number>) {
  try {
    await initializeViewData();
    await fs.writeFile(VIEW_DATA_PATH, JSON.stringify(views, null, 2));
  } catch {
    // Silently fail - in-memory only
  }
}

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const allViews = await getAllViews();
  const currentViews = allViews[slug] || 0;

  return NextResponse.json({ views: currentViews });
}

export async function POST(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const allViews = await getAllViews();
  const currentViews = allViews[slug] || 0;
  const newViews = currentViews + 1;
  allViews[slug] = newViews;
  await saveViews(allViews);

  return NextResponse.json({ views: newViews });
}
