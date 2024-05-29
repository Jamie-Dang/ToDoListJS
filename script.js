// Thêm biểu tưởng "checked" khi item được "click": Đánh dấu hoàn thành task
let list = document.querySelector("ul");
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
  let li = document.createElement("li");
  // Lấy giá trị nhập từ bàn phím (người dùng)
  let inputValue = document.getElementById("myInput").value;
  // Tạo một đối tượng TextNode mới chứa giá trị văn bản được nhập từ ô input
  let t = document.createTextNode(inputValue);
  // Thêm đối tượng TextNode vào phần tử <li>
  li.appendChild(t);
  // Kiểm tra nếu người dùng không nhập gì vào ô input, hiển thị một cảnh báo yêu cầu nhập dữ liệu. Nếu có dữ liệu được nhập, thêm mục mới vào danh sách
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  // Tạo nút "đóng" và thêm nó vào item mới
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Thêm sự kiện onclick cho nút đóng mới tạo
  span.onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}
