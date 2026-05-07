import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        // Здесь добавь логику отправки email или сохранения в БД
        console.log('Message received:', { name, email, message });

        // Пример: отправка в Telegram бот
        // const botToken = process.env.TELEGRAM_BOT_TOKEN;
        // const chatId = process.env.TELEGRAM_CHAT_ID;
        // await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     chat_id: chatId,
        //     text: `New message from ${name} (${email}):\n${message}`
        //   })
        // });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Error sending message' }, { status: 500 });
    }
}
