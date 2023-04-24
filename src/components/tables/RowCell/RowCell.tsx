import { nanoid } from 'nanoid'

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = (error: any) => (
  <div style={{ color: 'red' }}>Error: {error?.message ?? 'Failure'}</div>
)

export const Success = (weekdays: Array<string>) => (
  <tr>
    {weekdays.map((day) => (
      <td key={nanoid()}>{day}</td>
    ))}
  </tr>
)
