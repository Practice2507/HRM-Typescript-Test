import { useState } from "react"
interface EmployeeType{
        id: number,
        name: string,
        age: number,
        address: string,
        email:string,
        position: string
    }
export default function Employee(){
    const [employees,setEmployees]= useState<EmployeeType[]>([]);

    const [form, setForm]=useState({
        id:'',
        name:'',
        age: '',
        address:'',
        email:'',
        position:''
    })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}= e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const idNumber= Number(form.id);
        if( !idNumber){
            alert('Vui lòng nhập ID hợp lệ')
        } else if(idNumber <=0){
            alert('ID phải lớn hơn 0');
            return;
        }
        const isDuplicate = employees.some((id)=> id.id=== idNumber);
        if(isDuplicate){
            alert(`ID ${idNumber} đã tồn tại, vui lòng nhập id khác`);
            return;
        }
    const newEmployee:EmployeeType={
        id: idNumber,
        name: form.name,
        age:Number(form.age),
        address: form.address,
        email: form.email,
        position: form.position
    };
    setEmployees([...employees,newEmployee]);
    setForm({
        id:'',
        name:'',
        age: '',
        address:'',
        email:'',
        position:''
    });
};
      return (
  <div>
    <h2>Thêm Nhân Viên</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label>ID</label>
            <input type="number" name="id" value={form.id} onChange={handleChange} placeholder="Nhập ID" required />
        </div>
        <div>
            <label>Tên</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nhập Tên" required />
        </div>
        <div>
            <label>Tuổi</label>
            <input type="number" name="age" value={form.age} onChange={handleChange} placeholder="Nhập Tuổi" required />
        </div>
        <div>
            <label>Địa chỉ</label>
            <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Nhập Địa chỉ" required />
        </div>
        <div>
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Nhập Email" required />
        </div>
        <div>
            <label>Chức vụ</label>
            <input type="text" name="position" value={form.position} onChange={handleChange} placeholder="Nhập Chức vụ" required />
        </div>
        <button type="submit">Thêm nhân viên</button>
    </form>
    <hr />
    <h2>Danh Sách Nhân Viên</h2>
    {employees.length === 0 ? (
      <p>Chưa có nhân viên nào.</p>
    ) : (
      <div>
        {employees.map((emp)=>(
            <li key={emp.id}>
                <span>ID: {emp.id}</span>
                <span>Tên: {emp.name}</span>
                <span>Tuổi: {emp.age}</span>
                <span>Địa chỉ: {emp.address}</span>
                <span>Email: {emp.email}</span>
                <span>Chức vụ: {emp.position}</span>
              
            </li>
        ))}
      </div>
    )}
  </div>
);
}