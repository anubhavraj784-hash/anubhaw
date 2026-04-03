"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const [member, setMember] = useState("");
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Array<{id:number;member:string;task:string;done:boolean}>>([]);

  const members = useMemo(() => ["Riya", "Saurabh", "Mina", "Arjun", "Sneha"], []);

  const addTask = () => {
    if (!task.trim() || !member) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), member, task: task.trim(), done: false },
    ]);
    setTask("");
  };

  const toggleDone = (id: number) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem",
      padding: "2rem",
      background: "linear-gradient(135deg, #0D9488, #0EA5E9)",
      color: "#ffffff",
      textAlign: "center",
    }}>
      <section style={{ maxWidth: "700px" }}>
        <h1 style={{ fontSize: "3rem", margin: "0.5rem 0" }}>Welcome to Our Team</h1>
        <p style={{ fontSize: "1.25rem", lineHeight: 1.6 }}>
          We’re building great products together with focus, ownership, and a growth mindset.
        </p>
      </section>

      <section style={{
        background: "rgba(255,255,255,0.15)",
        border: "1px solid rgba(255,255,255,0.35)",
        borderRadius: "14px",
        padding: "1.5rem",
        maxWidth: "500px",
        width: "100%",
      }}>
        <h2 style={{ margin: "0 0 0.5rem", fontSize: "1.5rem" }}>Team Lead</h2>
        <p style={{ margin: 0, fontSize: "1.15rem" }}><strong>Anubhaw</strong></p>
      </section>

      <section style={{
        background: "rgba(255,255,255,0.2)",
        borderRadius: "12px",
        padding: "1rem",
        maxWidth: "540px",
        width: "100%",
      }}>
        <h2 style={{ margin: "0 0 1rem", fontSize: "1.4rem" }}>Assign Task</h2>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
          <select
            value={member}
            onChange={(e) => setMember(e.target.value)}
            style={{ padding: "0.6rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.1)", color: "#fff", minWidth: "200px" }}
          >
            <option value="">Select team member</option>
            {members.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Task description"
            style={{ padding: "0.6rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.1)", color: "#fff", minWidth: "240px" }}
          />

          <button
            onClick={addTask}
            style={{
              padding: "0.6rem 1rem",
              borderRadius: "8px",
              border: "none",
              color: "#0d9488",
              background: "#ffffff",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Assign
          </button>
        </div>

        <div style={{ marginTop: "1rem", textAlign: "left" }}>
          {tasks.length === 0 ? (
            <p>No tasks assigned yet. Use the form above to add tasks.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {tasks.map((item) => (
                <li key={item.id} style={{
                  margin: "0.3rem 0",
                  padding: "0.6rem",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.75rem"
                }}>
                  <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
                    <strong>{item.member}</strong>: {item.task}
                  </span>
                  <button
                    onClick={() => toggleDone(item.id)}
                    style={{
                      border: "1px solid #fff",
                      borderRadius: "8px",
                      background: item.done ? "#22c55e" : "rgba(255,255,255,0.2)",
                      color: "#fff",
                      padding: "0.3rem 0.6rem",
                      cursor: "pointer",
                    }}
                  >
                    {item.done ? "Done" : "Mark Done"}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
