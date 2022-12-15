<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'anas work station' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9BQGeM5/|y#.t/Y=odu6/dnitMnlIjf+b}K.ppLTahFP%$,QQ^Az/*<Frq$QEyGX' );
define( 'SECURE_AUTH_KEY',  '4Y~+J`*>+!a?Sc<1UigTmtIG0@Z=:5%Xj8vU=;B!9ny 7YL{!<,O=@Er{#4Di.s`' );
define( 'LOGGED_IN_KEY',    '@%$,oq#sI7lJ{=ALU*]#:g$ejU8|N N=9M-Z975E$BLA`+`(Xv+3a*3]bPeHiw5Z' );
define( 'NONCE_KEY',        'H<_|<(J5a~,eT&l)@-yOC~|pP?0!w8yoq{M<`4<z#>fal)nq-=-:#2Z@S@H3>a^E' );
define( 'AUTH_SALT',        'b0C]XI-ROG-]]cIKjg*b#x3G!U3XlWOg0@?2+y}_U<H~Th!stgAz^_^,y+5Rc-ty' );
define( 'SECURE_AUTH_SALT', '}xa3nowxm9JNQxL 0c)R,R-AALHb>&rOdQ:<U={.u&N^HrIgxPcpxH/[<m.8#r. ' );
define( 'LOGGED_IN_SALT',   'mYEiod$zFP9WDv08-3oaL{hw6:-;];hF,PB?aUgg,xGzbwVRgD4P2*VB;IqKfdi,' );
define( 'NONCE_SALT',       'Ch*OK+~fzFnG:mJn 2a&ypMZ7?D8q4@e#[7%#C^sE3B;:p,JIH{iD]ghEL:IqsRI' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
