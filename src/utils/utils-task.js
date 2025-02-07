export const getInitialData = () => [
   {
      id: "todo",
      title: "To do",
      color: "bg-yellow-50",
      tasks: [
         {
            id: "1",
            title: "Banking App Mobile",
            category: "Commerce",
            date: "June 15, 2021",
            assignee: {
               avatar: "/placeholder.svg?height=24&width=24",
               fallback: "BA",
            },
         },
         {
         id: "2",
         title: "Restaurant Case",
         category: "Design",
         date: "June 16, 2021",
            assignee: {
               avatar: "/placeholder.svg?height=24&width=24",
               fallback: "RC",
            },
         },
      ],
   },
   {
      id: "in-progress",
      title: "In progress",
      color: "bg-purple-50",
      tasks: [
         {
         id: "3",
         title: "Health Care Shot",
         category: "Medical",
         date: "June 8, 2021",
            assignee: {
               avatar: "/placeholder.svg?height=24&width=24",
               fallback: "HC",
            },
         },
      ],
   },
   {
      id: "on-approval",
      title: "On approval",
      color: "bg-green-50",
      tasks: [
         {
         id: "4",
         title: "Porsche Case",
         category: "Automotive",
         date: "June 5, 2021",
            assignee: {
               avatar: "/placeholder.svg?height=24&width=24",
               fallback: "PC",
               },
         },
      ],
   },
   {
      id: "done",
      title: "Done",
      color: "bg-pink-50",
      tasks: [
         {
         id: "5",
         title: "UI Graphic Tips #5",
         category: "Design",
         date: "May 28, 2021",
         assignee: {
            avatar: "/placeholder.svg?height=24&width=24",
            fallback: "UI",
            },
         },
      ],
   },
]