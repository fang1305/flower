if (window.location.search.split('=')[1]) {
    var doc = document.getElementById('parentHref');
    if (window.location.search.split('=')[1] == 1) {
        // 机构
        doc.href = "../../agent.html";
        doc.innerHTML = "机构帮助"
    } else if (window.location.search.split('=')[1] == 2) {
        // 学生
        doc.href = "../../student.html";
        doc.innerHTML = "学生帮助"
        document.getElementById('teacher') ? document.getElementById('teacher').innerHTML="学生后台" : '';
    }
}