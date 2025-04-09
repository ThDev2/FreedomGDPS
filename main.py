import discord
from discord.ext import commands
import requests
import random
import re
import os

intents = discord.Intents.default()
intents.message_content = True

bot = commands.Bot(command_prefix="!", intents=intents)

GDPS_URL = "https://fless.ps.fhgdps.com"  # GANTI dengan URL GDPS kamu
DISCORD_BOT_TOKEN = os.environ['BOT_TOKEN']

def is_valid_youtube(url):
    pattern = r"(https?://)?(www\.)?(youtube\.com|youtu\.be)/.+"
    return re.match(pattern, url)

@bot.event
async def on_ready():
    print(f"Bot logged in as {bot.user.name}")

@bot.command()
async def uploadsong(ctx, youtube_url: str):
    if not is_valid_youtube(youtube_url):
        await ctx.send("❌ Invalid YouTube URL.")
        return

    song_id = random.randint(100000, 999999)
    song_name = f"YT-{song_id}"

    await ctx.send(f"Uploading `{song_name}` to GDPS...")

    try:
        response = requests.post(f"{GDPS_URL}/uploadSong.php", data={
            'songID': song_id,
            'url': youtube_url
        })

        if response.status_code == 200 and "success" in response.text.lower():
            await ctx.send(f"✅ Uploaded `{song_name}` with ID `{song_id}`!")
        else:
            await ctx.send(f"⚠️ Upload failed:\n```{response.text}```")

    except Exception as e:
        await ctx.send(f"❌ Error:\n```{str(e)}```")

bot.run(DISCORD_BOT_TOKEN)
