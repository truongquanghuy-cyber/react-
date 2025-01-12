# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# node???
- js chạy ở đâu : browser
- nodejs giúp ta chạy đc file mà ko cần browser
# comamnd
 npm install hoặc npm i
 npm run dev hoặc npx vite
 nếu như trong node_module/bin không có vite thì nó sẽ down vê thực thi -> sau khi thực thi xong sẽ remove luôn.
 package.json : liệt kê ra thư viện cần trong dự án(liệt kê 1 khoản version của thư viện)
 packeage-lock.json: liệt kê chính xác version của thư viện đang cài là bao nhiêu

# folder
 - node-modules : lưu trữ thư viện trong dự án
 - public: dùng để lưu trữ file static, icon, image, audio
 - src: là nơi code chính của chúng ta
 - vite.config.js: setup môi trường để chạy dự án
 - .eslintrc.cjs: (remove) nghĩa là thống nhất cách code trong dự án(chỉ đc dùng let và const)
 # react
 - npm cd. /tên thư mục/ để chỉ vào thư mục
 # data binding
 - dung {}
 - khac voi template string ``: ${}
 - kiểu dữ liệu trên binding : number, string, jsx
 # handle event
 - on : viết thường
 - event : viết hoa
 # thuộc tính style trong jsx là 1 object
 # nếu xử lý điều kiện trong binding bắt buộc xử dụng toán tử 3 ngôi , ko đc xử dụng if else

 # global : chỉ cần import vào sẽ ăn toàn bộ dự án
 # module : yêu cầu tên file phải chấm thêm module.css

# props : giúp ta tái sử dụng lại giá trị UI
# Destructuring :
- const sv = {
    name: "abc",
    age: 20,    }
 // const name = sv.name;
  const {name} = sv;  

   //const age = sv.age;
  const {age} = sv;  

#props : giúp ta chuyển dữ liệu từ component cha xuống component con  

# prinitive type:

- string, number, boolean, null, undefined...
- dc luu o vung nho stack cua thanh Ram

# object type

- array, object, (function thuoc object)
- dc luu o vung nho heap cua thanh Ram

# stack 
- dung de luu tru nhung du lieu co dinh
# heap
- dung le luu tru nhung du lieu ko co dinh

# copy array
khi thay doi mang moi thi mang cu khong bi anh huong

- slice
- map
- spread operator: 
# set state

- neu nhu cap nhat gia tri moi bang gia tri truoc do thi react se khong re-render giao dien
- muon react re-render thi phai cap nhat gia tri moi khac gia tri truoc do
- chu y : dac biet doi voi Array,object.

# copy object
- Object.assign({}, <truyen doi tuong copy toan bo thuoc tinh cua doi tuong do>)
- vd : 
  - let sv1 = {name:'sv1', toan: 10, ly: 10};
  - let sv2 = Object.assign({}, sv1);
  - sv2 !== sv1 //true
- spread operator: 
# npm i react-router@latest

# useRef
- Giúp lấy 1 element trong React
- Trả về 1 object : {current<giá trị>}

# component
- khi code component thì chú ý không xét cứng kích thước width, height của component đó
- kích thước width , height : để nơi mình sử dụng muốn xét bao nhiêu thì xét

# useNavigate
- dùng để di chuyển giữa các page mà ko cần sử dụng link hoặc navlink

# Life-cycle
- mouting: trang web lần đầu xuất hiện trên giao diện
- updating: trang web có cập nhật về state, props.
- unmouting: trang web bị xóa khỏi giao diện

# useEffect"
- giúp chúng ta can thiệp vào trong từ vòng đời của component
- luôn chạy lần đầu 
- dependencies: khi có 1 trong những giá trị truyền vào mảng dependencies thay đổi thì callback của useEffect sẽ đc gọi
- không truyền dependencies thì sẽ chạy mỗi lần re-render.(không có tham số thứ 2 của useEffect)
- thứ tự chạy :UI -> useEffect::callback. luôn luôn đợi giao diện render lên xong mới gọi vào callback của useEffect  

# query string
- bổ sung thêm thông tin, mang thông tin từ trang này sang trang khác

# Object.values
- chuyen object ve array chua cac gia tri cua property

# Object.keys
- chuyen object ve array chua cac ten cua property

# Object.entries
- chuyen Object ve array moi phan tu

# props: 
- khi truyen gia tri tu component cha xuong component con

# useEffect 
- can thiệp vào vòng đời của unmouting 
