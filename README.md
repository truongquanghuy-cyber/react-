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