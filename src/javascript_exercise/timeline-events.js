// 3. Bài tập về timeline và events
const events = [
  { id: 1, start: "2024-01-01", end: "2024-01-05", type: "meeting" },
  { id: 2, start: "2024-01-03", end: "2024-01-07", type: "event" },
  { id: 3, start: "2024-01-06", end: "2024-01-09", type: "meeting" },
  { id: 4, start: "2024-01-08", end: "2024-01-12", type: "event" },
];

//  Tạo timeline hiển thị số lượng events đang diễn ra theo ngày
function createTimeline(events) {
  // Output: { '2024-0-01': 1, '2024-01-02': 1, '2024-01-03': 2, ... }
  return events.reduce((acc, event) => {
    const start = new Date(event.start);
    const end = new Date(event.end);
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split("T")[0];
      console.log(d.toISOString());
      acc[dateStr] = (acc[dateStr] || 0) + 1;
    }

    return acc;
  }, {});
}

console.log("Time Line: ", createTimeline(events));
