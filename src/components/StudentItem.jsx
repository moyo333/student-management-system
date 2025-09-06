import React from 'react';

function StudentItem({ student, onEdit, onDelete }) {
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
      <td className="px-6 py-4 whitespace-nowrap">{student.course}</td>
      <td className="px-6 py-4 whitespace-nowrap">{student.grade}</td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <button 
          onClick={() => onEdit(student)}
          className="text-blue-500 hover:text-blue-700 mr-4"
        >
          Edit
        </button>
        <button 
          onClick={() => onDelete(student.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentItem;
