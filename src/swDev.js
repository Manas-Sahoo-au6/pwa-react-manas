
export default function serviceWorkerDev() {
  function determineAppServerKey() {
    const vapidPublicKey =
      "BJo5sx98LlKsXbU6tiroW19n0PbEPOBXJ6ICUXGwSoWAxw3GLKHE5pQAYPFBdErl8HndjRJvYxwxArkiSUWegDU";
    return urlBase64ToUint8Array(vapidPublicKey);
  }

  function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  console.log(swUrl, "service-worker");
  navigator.serviceWorker
    .register(swUrl)
    .then((response) => {
      console.warn("response", response);

      return response.pushManager
        .getSubscription()
        .then(function (subscription) {
          response.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: determineAppServerKey(),
          });
        });
    })
    .catch((err) => {
      console.log(err, "service-worker");
    });
}

// "privateKey":"YofPE3ZdI-7Yx71q6SCse1J2x5b8146EoaszX1YrSwE"
