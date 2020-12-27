var url = 'https://api.github.com/users/';

async function getMostFollowers(...users) {
	var promiseArray = users.map((user) => $.getJSON(url + user));
	var users = await Promise.all(promiseArray);

	var followersArray = users.map((user) => user.followers);

	var maxFollowers = Math.max(...followersArray);
	var name = users[followersArray.indexOf(maxFollowers)].name;
	console.log(name + ':' + maxFollowers);
}

getMostFollowers('wes', 'chloe', 'troye', 'selena', 'april', 'june', 'jeff', 'emmett');
