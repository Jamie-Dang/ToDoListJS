// Thêm biểu tưởng "checked" khi item được "click": Đánh dấu hoàn thành task
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Tạo item mới khi nhấn nút "Add"
// Định nghĩa hàm có tên: newElement()
function newElement() {
  var li = document.createElement("li");
  // Lấy giá trị nhập từ bàn phím (người dùng)
  var inputValue = document.getElementById("myInput").value;
  // Tạo một đối tượng TextNode mới chứa giá trị văn bản được nhập từ ô input
  var t = document.createTextNode(inputValue);
  // Thêm đối tượng TextNode vào phần tử <li>
  li.appendChild(t);
  // Kiểm tra nếu người dùng không nhập gì vào ô input, hiển thị một cảnh báo yêu cầu nhập dữ liệu. Nếu có dữ liệu được nhập, thêm mục mới vào danh sách
  // if (inputValue === "") {
  //   alert("You must write something!");
  // } else {
  document.getElementById("myUL").appendChild(li);
  // }
  document.getElementById("myInput").value = "";
}

// Tạo nút "đóng" và thêm nó vào mỗi item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Xử lý sự kiện cho nút đóng
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
