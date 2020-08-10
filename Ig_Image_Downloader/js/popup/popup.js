const toggle = document.getElementsByTagName("input")[0];

chrome.storage.local.get(
		["extension_state"],
		(info)=> {

			const state = info.extension_state;

			if(state == "on") {
				toggle.checked = true;
			}

			else if(state == "off") {
				toggle.checked = false;
			}
		}
	)

toggle.addEventListener("click" , checked_state );

function checked_state (){
	
	if (toggle.checked == true){
		chrome.storage.local.set(
			{extension_state : "on"} ,
			()=>{
				chrome.tabs.query(
					{active : true}, 
					(info)=> {
						const tab = info[0]
						chrome.tabs.executeScript(
							tab.id,
							{code : "window.location.reload();"}
						)
					}
				)
			}
		)
	}
	else if (toggle.checked == false){
		chrome.storage.local.set(
			{extension_state : "off"} ,
			()=>{
				chrome.tabs.query(
					{active : true}, 
					(info)=> {
						const tab = info[0]
						chrome.tabs.executeScript(
							tab.id,
							{code : "window.location.reload();"}
						)
					}
				)
			}
		)
	}
}