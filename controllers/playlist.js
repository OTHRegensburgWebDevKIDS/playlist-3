const logger = require('../utils/logger');
const playlistStore = require('../models/playlist-store.js');
const songStore = require('../models/song-store.js');

const playlist = {
    async index(request, response) {
        const playlistId = request.params.id;
        const playlist = await playlistStore.getPlaylist(playlistId);
        const songs = await songStore.getSongsForPlayList(playlistId);
        logger.info('Playlist id = ' + playlistId);
        const viewData = {
            title: 'Playlist',
            playlist: playlist,
            songs: songs
        };
        response.render('playlist', viewData);
    },
    async deleteSong(request, response) {
        const playlistId = request.params.id;
        const songId = request.params.songid;
        logger.debug(`Deleting Song ${songId} from Playlist ${playlistId}`);
        await songStore.removeSong(songId);
        response.redirect("/playlist/" + playlistId);
    },
    async addSong(request, response) {
        const playlistId = request.params.id;
        const newSong = {
            title: request.body.title,
            artist: request.body.artist,
            duration: Number(request.body.duration)
        };
        logger.debug("New Song", newSong);
        await songStore.addSong(playlistId, newSong);
        response.redirect("/playlist/" + playlistId);
    },
};

module.exports = playlist;