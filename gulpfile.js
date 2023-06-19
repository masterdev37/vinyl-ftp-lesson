const { src, dest } = require('gulp');
const ftp = require('vinyl-ftp');

function deploy() {

	var connect = ftp.create({
		host: 'booklt.uroki-verstki.ru',
		user: 'booklt_user',
		password: '!i.UnN-8E88FMHP',
		parallel: 10,
	});

	var proj = [
		'src/**'
	];

	return src(proj, {buffer: false})
	.pipe(connect.newer('/')
	.pipe(connect.dest('/')));

}

exports.deploy = deploy;

