import Image from 'next/image'

const students = [
  { name: 'Kuba Fuchs', image: '/portrety/Portret (1).jpg' },
  { name: 'Michał Dydyk', image: '/portrety/Portret (2).jpg' },
  { name: 'Kuba Bysiewicz', image: '/portrety/Portret (3).jpg' },
  { name: 'Karol Kuzyk', image: '/portrety/Portret (4).jpg' },
  { name: 'Błażej Ryba', image: '/portrety/Portret (5).jpg' },
  { name: 'Mariusz Pociask', image: '/portrety/Portret (6).jpg' },
  { name: 'Sabina Pelc', image: '/portrety/Portret (7).jpg' },
  { name: 'Hubert Woźniak', image: '/portrety/Portret (8).jpg' },
  { name: 'Jan Pieprzycki', image: '/portrety/Portret (9).jpg' },
  { name: 'Marcin Wiercioch', image: '/portrety/Portret (10).jpg' },
  { name: 'Szymon Łukarski', image: '/portrety/Portret (11).jpg' },
  { name: 'Kacper Turek', image: '/portrety/Portret (12).jpg' },
  { name: 'Aleksandra Kiełb', image: '/portrety/Portret (13).jpg' },
  { name: 'Stanisław Karnas', image: '/portrety/Portret (14).jpg' },
  { name: 'Adam Majcher', image: '/portrety/Portret (15).jpg' },
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
