PureComponent
- PureComponent giống như Component ngoại trừ việc đó là nó xử lý shouldComponentUpdate thay cho Component
- PureComponent sẽ shallow comparison trên cả props và state, component chỉ được re-render khi các props hay state có sự thay đổi
- Dùng cho Class Component


React.memo()
- Là 1 HOC
- Dùng cho Function Component
- Giống PureComponent sử dụng shallow comparison, chỉ render lại components nếu props thay đổi.


HOC
- Là một function
- Nhận vào một component và trả về một component mới
- Giúp tránh việc lặp lại code và sử dụng lại code cho nhiều component khác nhau