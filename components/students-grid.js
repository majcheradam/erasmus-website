import Image from 'next/image'

const students = [
  { name: 'Student', image: '/test.png' },
  { name: 'Student', image: '/test.png' },
  { name: 'Student', image: '/test.png' },
  { name: 'Student', image: '/test.png' },
  { name: 'Student', image: '/test.png' },
  { name: 'Student', image: '/test.png' },
  { name: 'Student', image: '/test.png' },
  { name: 'Student', image: '/test.png' },
  { name: 'Student', image: '/test.png' },
  { name: 'Student', image: '/test.png' },
  { name: 'Student', image: '/test.png' },
  { name: 'Student', image: '/test.png' },
  { name: 'Student', image: '/test.png' },
  { name: 'Student', image: '/test.png' },
  { name: 'Student', image: '/test.png' },
]

const StudentsGrid = () => {
  return (
    <div className="main-container student-grid  subpage-container">
      {students.map(({ image, name }, i) => (
        <div key={name}>
          <Image
            src={image}
            alt={name}
            width="211"
            height="281"
            objectFit="contain"
          />
          <p>{name}</p>
        </div>
      ))}
    </div>
  )
}

export default StudentsGrid
