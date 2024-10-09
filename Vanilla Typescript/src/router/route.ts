type RouteMap = {
  [key: string]: string;
};

// Function to handle routing
function router(): void {
  const routes: RouteMap = {
    "": "home", // Default route
    "#home": "home",
    "#about": "about",
    "#contact": "contact",
  };

  // Get the current hash (route) or default to an empty string
  const currentHash: string = window.location.hash;

  // Find the corresponding section ID for the current hash
  const route = routes[currentHash] || "home";

  // Hide all routes
  document.querySelectorAll(".route").forEach((section: Element) => {
    (section as HTMLElement).style.display = "none";
  });

  // Display the current route
  const activeSection: HTMLElement | null = document.getElementById(route);
  if (activeSection) {
    activeSection.style.display = "block";
  }
}

export default router;
