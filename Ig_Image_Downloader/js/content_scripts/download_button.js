function create_download_button (post_element) {
	const html = 
	`
	<!--<download-button-container>-->
    	<download-button>Download</download-button>
	<!--</download-button-container>-->
	`;
	const download_button_container = document.createElement("download-button-container");

	download_button_container.innerHTML = html;

	const download_button = download_button_container.getElementsByTagName("download-button")[0];

	download_button.addEventListener( 
		"click", 
		() =>  {
					get_post_content_url (post_element);
				} 
	)


	return download_button_container;
}

function injection_process () {
	const posts = get_posts();

	for (let i=0; i<posts.length; i++) {
		const post = posts[i];
		const post_header = post.getElementsByTagName("header")[0];
		const download_button = create_download_button(post);
		const download_button_already_exist = post.getElementsByTagName("download-button")[0]
											? true
											: false;

		if (post_header && download_button_already_exist == false) {
			post_header.prepend(download_button)
		}
	}
}

chrome.storage.local.get (
    ["extension_state"] ,
   
    (info) => {
	    const state = info.extension_state;

	    if(state == "on"){
	    	document.addEventListener("scroll", injection_process);
	    }
    }
);