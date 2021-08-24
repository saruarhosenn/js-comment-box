
document.getElementById("submit__btn").addEventListener("click", function () {
	// slect comment box
	const commentField = document.getElementById("comment__box");

	// get comment box of value & set empty Value
	const commentFieldValue = commentField.value;
	commentField.value = " ";

	// create a new element & set input value
	const showCommentValue = document.createElement("p");
	showCommentValue.innerText = commentFieldValue;

	// add new element in conatiner & show the comment value
	const wrapper = document.getElementById("container");
	wrapper.appendChild(showCommentValue);
	// wrapper.prepend(showCommentValue);

});

const commentFieldStyle = document.getElementById("comment__box");
commentFieldStyle.style.width = "100%";
commentFieldStyle.style.marginBottom = "10px";
commentFieldStyle.style.border = "2px solid #2c2c54";
commentFieldStyle.style.outline = "0";
commentFieldStyle.style.borderRadius = "3px";
commentFieldStyle.style.padding = "20px";
commentFieldStyle.style.fontSize = "18px";


//==========================
// Button Style
//==========================
const btns = document.getElementsByClassName("btn");
for (const clickBtn of btns) {
	clickBtn.style.backgroundColor = "#2c2c54";
	clickBtn.style.color = "#FFFFFF";
	clickBtn.style.padding = "12px 25px";
	clickBtn.style.fontSize = "16px";
	clickBtn.style.margin = "5px";
	clickBtn.style.border = "0";
	clickBtn.style.outline = "0";
	clickBtn.style.cursor = "pointer";
	clickBtn.style.borderRadius = "3px";
	clickBtn.setAttribute("title", "Submit Button");
};