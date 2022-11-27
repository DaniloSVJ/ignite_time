import { HitoryContainer, HitoryList, Status } from './styles'
export function Usuarios() {
  return (
    <HitoryContainer>
      <h1>Meu historico</h1>
      <HitoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>Duração</td>
              <td>Inicio</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>Duração</td>
              <td>Inicio</td>
              <td>
                <Status statusColor="green">Status</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>Duração</td>
              <td>Inicio</td>
              <td>
                <Status statusColor="yellow">Andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>Duração</td>
              <td>Inicio</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HitoryList>
    </HitoryContainer>
  )
}
