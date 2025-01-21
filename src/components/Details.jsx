import React, { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    enrollment: '',
    branch: '',
    college: '',
    year: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-cyan-100 rounded-xl shadow-lg p-8 border border-gray-100">
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">STUDENT DETAILS</h1>
          <br></br>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  First Name: 
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  required
                  placeholder=" Enter your first name"
                />
              </div>
              <br></br>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Last Name: 
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  required
                  placeholder=" Enter your last name"
                />
              </div>
            </div>
            <br></br>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email Address: 
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                required
                placeholder=" your.email@example.com"
              />
            </div>
          </div>
          <br></br>

          <div className="bg-gray-50 p-6 rounded-lg space-y-6">
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Enrollment : 
              </label>
              <input
                type="text"
                name="enrollment"
                value={formData.enrollment}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                required
                placeholder=" Enter your enrollment number"
              />
            </div>
            <br></br>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Branch: 
              </label>
              <div className="relative">
                <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full md:w-30 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 appearance-auto"
                required
              >
                   <option value="">Select your branch</option>
                   <option value="CSE">Computer Science and Engineering</option>
                   <option value="IT">Information Technology</option>
                   <option value="ECE">Electronics & Communication</option>
                   <option value="ME">Mechanical Engineering</option>
                   <option value="CE">Civil Engineering</option>
                   <option value="CSE-AIML">Computer Science and Engineering-AIML</option>
                   <option value="CSE-AI">Computer Science and Engineering-AI</option>
                   <option value="CSE-ML">Computer Science and Engineering-ML</option>
                </select>
            </div>
          </div>
            <br></br>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                College Name: 
              </label>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                required
                placeholder=" Enter your college name"
              />
            </div>
            <br></br>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Current Year: 
              </label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                required
              >
                <option value="">Select your year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
          </div>
          <br></br>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-medium"
            >
              Submit  
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default StudentForm;