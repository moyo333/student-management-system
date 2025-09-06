 import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import Modal from './components/Modal';

function App() {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map(student => 
      student.id === updatedStudent.id ? updatedStudent : student
    ));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const openAddModal = () => {
    setCurrentStudent(null);
    setModalMode('add');
    setIsModalOpen(true);
  };

  const openEditModal = (student) => {
    setCurrentStudent(student);
    setModalMode('edit');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (student) => {
    if (modalMode === 'add') {
      addStudent(student);
    } else {
      updateStudent(student);
    }
    closeModal();
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <header className="mb-8 flex items-center justify-between">
        {/* Title on the left */}
        <h1 className="text-3xl font-bold text-blue-600">
          Student Management System
        </h1>

        {/* Profile Picture on the right */}
         <img
    src="/moyo-32.jpg" // put your image in the public folder
    alt="Profile"
    className="w-40 h-40 rounded-full border-2 border-blue-500 shadow-md"
  />
   <p
  className="mt-4 text-lg font-semibold 
             bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
             bg-clip-text text-transparent 
             transition duration-300 ease-in-out 
             hover:scale-110 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500"
>
  Ndabezihle Moyo
</p>
      </header>

      {/* Add Student Button */}
      <div className="mb-4 flex justify-end">
        <button
          onClick={openAddModal}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Student
        </button>
      </div>

      {/* Student List */}
      <StudentList 
        students={students} 
        onEdit={openEditModal} 
        onDelete={deleteStudent} 
      />

      {/* Modal */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <StudentForm 
            student={currentStudent} 
            onSubmit={handleFormSubmit} 
            mode={modalMode} 
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
