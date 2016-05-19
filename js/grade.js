$(initPage); 

function initPage(){

	$.getJSON("grade.json",function(data){
		
		var gradeHtml = $.templates("#gradeTmpl").render(data);
		$(".container").append(gradeHtml);
	})
}