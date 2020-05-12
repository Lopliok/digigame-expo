import HeaderLoader from "./components/HeaderLoader";

export const routeOptions = {
  auth: {
    openers: {
      title: "Otevíráky",
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerRight: HeaderLoader,
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
    theory: {
      title: "Teorie",
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerRight: HeaderLoader,
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
    myPosts: {
      title: "Mé hlášky",
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerRight: HeaderLoader,
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
    detail: {
      title: "Detail",
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerRight: HeaderLoader,
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  },
  public: {
    log: {
      title: "Přihlášení",
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerRight: HeaderLoader,
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
    reg: {
      title: "Registrace",
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerRight: HeaderLoader,
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  },
};
