// JavaScript Document

function toggleItem(itemHeaderId,itemBodyId)
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
