import { useEffect, useMemo, useState } from "react";

type Ticket = {
  ticketName: string;
  description: string;
}

const getTicketDetails = () => {
  return new Promise<Ticket[]>((resolve) => {
    setTimeout(() => {
      const data = Array.from({ length: 1000 }, (_, i) => ({
  ticketName: `ticket ${i + 1}`,
  description: `description ${i}`
}));
      resolve(data);
    }, 2000);
  });
};

function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTicketDetails()
      .then((data) => {
        setTickets(data);
        setLoading(false);
      });
  }, []);

  const initialTicketList = useMemo<Ticket[]>(() => {
    return tickets.slice(0, 10).map((ticket) => ({
      ...ticket,
      ticketName: ticket.ticketName.toUpperCase()
    }));
  }, [tickets]);

  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <div
      style={{
        padding: '2rem'
      }}
    >
      <h1>Mock Ticketing Service</h1>
      <h2>First 10 Tickets</h2>
      <ul
        style={{
          
        }}
      >
        {initialTicketList.map((ticket, index) => (
          <li
            key={index}
            style={{
              padding: "0.25rem",
              marginBottom: "0.5rem",
              textAlign: 'center',
              width: '100%',
              backgroundColor: 'grey',
              borderRadius: '5px'
            }}
          >
            <strong>{ticket.ticketName}</strong>
            <p>{ticket.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;