DROP TABLE IF EXISTS playlist_playlists CASCADE;
DROP TABLE IF EXISTS playlist_songs CASCADE;

CREATE TABLE playlist_playlists (
	ID SERIAL PRIMARY KEY,
	TITLE VARCHAR
);

INSERT INTO playlist_playlists (TITLE) VALUES ('Happy Mood');
INSERT INTO playlist_playlists (TITLE) VALUES ('Iconic songs');

CREATE TABLE playlist_songs (
  ID SERIAL PRIMARY KEY,
  TITLE VARCHAR,
  ARTIST VARCHAR,
  DURATION INTEGER,
  PLAYLIST_ID INTEGER REFERENCES playlist_playlists ON DELETE CASCADE
);

INSERT INTO playlist_songs (TITLE, ARTIST, DURATION, PLAYLIST_ID) VALUES ('Valerie', 'Amy Winehouse', 90, 1);
INSERT INTO playlist_songs (TITLE, ARTIST, DURATION, PLAYLIST_ID) VALUES ('22', 'Taylor Swift', 180, 1);
INSERT INTO playlist_songs (TITLE, ARTIST, DURATION, PLAYLIST_ID) VALUES ('Happy', 'Pharrell Williams', 120, 1);

INSERT INTO playlist_songs (TITLE, ARTIST, DURATION, PLAYLIST_ID) VALUES ('Smells Like Teen Spirit', 'Nirvana', 180, 2);
INSERT INTO playlist_songs (TITLE, ARTIST, DURATION, PLAYLIST_ID) VALUES ('Bohemian Rhapsody', 'Queen', 150, 2);
INSERT INTO playlist_songs (TITLE, ARTIST, DURATION, PLAYLIST_ID) VALUES ('Imagine', 'John Lennon', 210, 2);
