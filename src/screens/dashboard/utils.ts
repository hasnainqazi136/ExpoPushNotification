export const sendPushNotification = async (expoPushToken: string) => {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "New Notification",
    body: "You have received a new message from our service. Please check for details.",
    data: { additionalData: "relevant data goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
};
