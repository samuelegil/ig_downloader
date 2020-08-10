function get_posts () {
	const posts = document.body.getElementsByTagName("article");

	return posts;
}

function get_post_content_url (post_element) {

		const post = post_element;
		const post_image = post.getElementsByClassName("FFVAD")[0];
		const post_video = post.getElementsByTagName("video")[0];

		if(post_image){
			//console.log(post_image.src);
			window.open(post_image.src);
		}
		else if (post_video){
			//console.log(post_video.src);	
			window.open(post_video.src);
		}
		else {
			console.log("no content at:");
			console.log(post);
		};
}
