const logger = require("../utils/logger.js");
const playlistStore = require("../models/playlist-store.js");

const dashboard = {
  async index(request, response) {
    logger.info("dashboard rendering");
    const playLists = await playlistStore.getAllPlaylists();
    const viewData = {
      title: "Dashboard",
      playlists: playLists
    };
    logger.info('about to render', playLists);
    response.render("dashboard", viewData);
  },

  async deletePlaylist(request, response) {
    const playlistId = request.params.id;
    logger.debug("Deleting Playlist", playlistId);
    await playlistStore.removePlaylist(playlistId);
    response.redirect("/dashboard");
  },

  async addPlaylist(request, response) {
    const newPlayList = {
      title: request.body.title,
    };
    logger.debug("Creating a new Playlist", newPlayList);
    await playlistStore.addPlaylist(newPlayList);
    response.redirect("/dashboard");
  }
};

module.exports = dashboard;
