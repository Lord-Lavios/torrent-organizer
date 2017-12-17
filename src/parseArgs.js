
export default async function () {

	const tab = "	";

	const usageData = {
		"help":
			"\nUsage: node organize <path> --api=<apikey|false> --mode=<mode>\n\n" +
			`<path>${tab}Location for where to look for files to organize\n\n` +
			`<apikey>${tab}api key from ombdapi.com; Defaults to false\n\n` +
			`<mode>${tab}Specify mode: "symlink", "hardlink", "nolink"; "hardlink" by default;\n\n` +
			`${tab}symlink: It creates shortcut of the files with formatted names instead of renaming\n` +
			`${tab}${tab} the original files.\n\n` +
			`${tab}hardlink: It creates new files with formatted names without taking extra space.\n` +
			`${tab}${tab}  If the original files are deleted, hard linked files will take the space.\n` +
			`${tab}${tab}  Basically duplicates of files without taking extra space.\n` +
			`${tab}${tab}  Recommended to use on torrents that are being seeded.\n\n` +
			`${tab}nolink: This renames the files and deletes the unnecessary files.\n` +
			`${tab}${tab}This will stop seeding.\n\n` +
			`--help${tab}show information about the options`
	};

	const args = process.argv.slice(2, process.argv.length);

	if (!args.length || args[0] === "--help" || args.length > 3) { console.log(usageData.help); return false; }

	//Path
	let path = args[0][args.length - 1] !== "/" ? args[0] + "/" : args[0];
	path = path.replace(/\\/g, "/");

	//Defaults
	let apiKey = false;
	let mode = "--mode=hardlink";

	args.forEach(arg => { //Parsing the mode and the api key
		if (/mode/.test(arg)) mode = arg;
		if (/api/.test(arg)) arg = arg.slice(arg.indexOf("="), arg.length);
	});

	if (mode === "--mode=hardlink") { //For the hardlink
		return { "mode": 0, path, apiKey };
	} else if (mode === "--mode=symlink") { //For the symlink
		return { "mode": 1, path, apiKey };
	} else { //For the nolink
		return { "mode": 2, path, apiKey };
	}
	
};