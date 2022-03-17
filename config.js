module.exports = {
    app: {
        px: '&',
        token: 'ODI5NjE4OTY2ODAwNDk4Njg5.YG6w3w.DUdxDUAC7Oe-fZC_i2icFq2rCrk',
        playing: 'Testons'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
