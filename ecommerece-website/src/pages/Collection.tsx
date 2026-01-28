import { table } from "console"

const Collection = () => {
  return (
    <div>
      
    </div>
  )
}

export default Collection

CREATE table if not exists staff (
  id SERIAL PRIMARY KEY, 
  dealership_id INTEGER NOT NULL REFERENCES dealerships(id), // foreign key to dealerships table
  name CHAR(50) NOT NULL, 
  role CHAR(20) NOT NULL
)