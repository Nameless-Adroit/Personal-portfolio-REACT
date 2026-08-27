import "./Table.css";

export function Table({data}) {
    return (
     <table className="edu-table">
          <thead>
            <tr>
              <th>Education Level</th>
              <th>School / Institution</th>
              <th>Years</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.level}</td>
                <td>{item.institution}</td>
                <td>{item.years}</td>
              </tr>
            ))}
          </tbody>
        </table>
    );
}