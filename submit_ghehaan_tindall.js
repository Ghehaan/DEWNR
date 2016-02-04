// JavaScript Document

function toggleItem(itemHeaderId,itemBodyId)
{
	toggleAccordian(itemHeaderId,itemBodyId);	
	toggleTab(itemHeaderId,itemBodyId);		
}

function toggleTab(itemHeaderId,itemBodyId)
{
	var itemHeaderClassName = document.getElementById(itemHeaderId).className;
	var itemBodyClassName = document.getElementById(itemBodyId).className;
	
	var children = document.getElementById(itemHeaderId).parentNode.parentNode.children;
	if(itemHeaderClassName.indexOf("currentTab")<0)
	{
		itemHeaderClassName = itemHeaderClassName + " currentTab";		
		itemBodyClassName = itemBodyClassName + " openTab";				
		for (i = 0; i < children.length; i++) { 
			if(children[i].children.length>0)
			{
				var itemClass = children[i].children[0].className;
				itemClass = itemClass.replace("currentTab", "");
				var itemId = children[i].children[0].id;
				document.getElementById(itemId).className = itemClass;
				
				var bodyClass = children[i].children[1].className;
				bodyClass = bodyClass.replace("openTab", "");
				var bodyId = children[i].children[1].id;
				document.getElementById(bodyId).className = bodyClass;				
			}
		}
	}
	document.getElementById(itemHeaderId).className = itemHeaderClassName;
	document.getElementById(itemBodyId).className = itemBodyClassName;
}

function toggleAccordian(itemHeaderId,itemBodyId)
{
	var itemHeaderClassName = document.getElementById(itemHeaderId).className;
	var itemBodyClassName = document.getElementById(itemBodyId).className;
		
	if(itemHeaderClassName.indexOf("expanded")>=0)
	{
		itemHeaderClassName = itemHeaderClassName.replace("expanded", "contracted");
	}
	else
	{
		itemHeaderClassName = itemHeaderClassName.replace("contracted", "expanded");
	}
	document.getElementById(itemHeaderId).className = itemHeaderClassName;
	
	if(itemBodyClassName.indexOf("open")>=0)
	{
		itemBodyClassName = itemBodyClassName.replace("open", "closed");
	}
	else
	{
		itemBodyClassName = itemBodyClassName.replace("closed", "open");
	}
	document.getElementById(itemBodyId).className = itemBodyClassName;
}
