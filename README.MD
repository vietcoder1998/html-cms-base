TÀI LIỆU CHO HỆ THỐNG QUẢN TRỊ HTML-CSS CỦA TEAMPLATE NHÀ TRƯỜNG.

1. Bài toán.
	- Khi quản trị nhà trường trên nhiều module khác nhau, việc quản trị giá trị của các teamplate sinh ra rất khác nhau, trong khi chúng cùng gọi trên một module của works.vn
	- Việc xử lý bằng tay các logic đơn giản là không cần thiết.
	-  Thời gian m làm việc thủ công rất lâu.
	
==> Cần có cms để xử lý đơn giản các trang của nhà trường.

2. Xử lý bài toán.
	- yêu cầu 1: Tạo ra một cms quản lý data chung của hệ thống giúp quản lý thông số của các teamplate	
	- yêu cầu 2: CMS có thể tích hợp và quản dữ liệu luồng.
	- yêu cầu 3: tự render ra build/ để đẩy lên trang trường.
	
3. Hệ thống:
	- server: node.
	- database: mysql. 
	- client: reactjs.
	 
4. Thiết kế:

    - 