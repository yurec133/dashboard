import { Component } from "solid-js";

interface NotificationProps {
  title: string;
  date: string;
}

const NotificationItem: Component<NotificationProps> = ({ title, date }) => (
  <li class="mb-7">
    <div class="text-5xl text-slateCustom600 font-custom">{title}</div>
    <div class="text-4xl text-slateCustom400 font-custom">{date}</div>
  </li>
);

const AlertsNotifications: Component = () => {
  const notifications = [
    { title: "Lorem ipsum dolores", date: "22 DEC 7:20 PM" },
    { title: "Lorem ipsum dolores", date: "22 DEC 7:20 PM" },
    { title: "Lorem ipsum dolores", date: "22 DEC 7:20 PM" },
    { title: "Lorem ipsum dolores", date: "22 DEC 7:20 PM" },
    { title: "Lorem ipsum dolores", date: "22 DEC 7:20 PM" },
  ];

  return (
    <div class="border border-orangeCustom200 bg-orangeCustom100 p-8 rounded-2xl h-full">
      <h2 class="text-6xl font-bold text-slateCustom700 mb-16">
        Alerts & Notifications
      </h2>
      <ul class="list-none bulletRing">
        {notifications.map((notification) => (
          <NotificationItem
            title={notification.title}
            date={notification.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default AlertsNotifications;
