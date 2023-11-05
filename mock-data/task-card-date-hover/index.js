const userDetailsApi = {
  message: 'Tasks returned successfully!',
  tasks: [
    {
      id: 'BMc4Bgy7FD7BOEa0NZzP',
      percentCompleted: 100,
      endsOn: 1690437548, //27th july 2023
      github: {
        issue: { id: 1806764661, assignee: 'sahsisunny', status: 'open' },
      },
      createdBy: 'ankush',
      assignee: 'sunny-s',
      title: 'Sync Discord User to RDS backend ',
      type: 'feature',
      priority: 'TBD',
      startedOn: 1689553319.9,
      status: 'COMPLETED',
      assigneeId: 'jbGcfZLGYjHwxQ1Zh8ZJ',
    },
    {
      id: 'CyGNTPGoA7Cgi3bbb3Mt',
      percentCompleted: 100,
      endsOn: 1694232000, // Sept 09 2023
      isNoteworthy: true,
      createdBy: 'ankush',
      lossRate: { dinero: 200, neelam: 0 },
      assignee: 'sunny-s',
      title: 'Collapse non-interesting tasks or PRs in member details page',
      type: 'feature',
      priority: 'MEDIUM',
      completionAward: { dinero: 3000, neelam: 0 },
      startedOn: 1680397446.1,
      status: 'VERIFIED',
      assigneeId: 'jbGcfZLGYjHwxQ1Zh8ZJ',
    },
    {
      id: 'F2A6XVGgM3IshzEd5niL',
      percentCompleted: 100,
      endsOn: 1688445662, //Jul 4 2023
      isNoteworthy: false,
      createdBy: 'ankush',
      lossRate: { dinero: 100, neelam: 0 },
      assignee: 'sunny-s',
      title: 'Status site should use cloudinary images',
      type: 'feature',
      priority: 'HIGH',
      completionAward: { dinero: 1000, neelam: 0 },
      startedOn: 1680398131.277,
      status: 'VERIFIED',
      assigneeId: 'jbGcfZLGYjHwxQ1Zh8ZJ',
    },
  ],
};

const usersTasksInDev = {
  initial: {
    message: 'Tasks returned successfully!',
    tasks: [
      {
        id: 'leX6wahONOe2BPxJxTkt',
        percentCompleted: 100,
        endsOn: 1694629740,
        github: {
          issue: {
            id: 1872244306,
            status: 'open',
          },
        },
        createdBy: 'ankush',
        assignee: 'ajeyakrishna',
        title: 'Bugs in extension requests page',
        type: 'feature',
        priority: 'TBD',
        status: 'COMPLETED',
        assigneeId: '36AGeYsrIZQcPYWlFb1a',
        dependsOn: [],
      },
      {
        id: '1TJzTISp2fuKjZ53ZZfG',
        percentCompleted: 100,
        endsOn: 1690591252,
        github: {
          issue: {
            id: 1812126813,
            status: 'open',
          },
        },
        createdBy: 'ankush',
        assignee: 'ajeyakrishna',
        title: 'Cache new response iff successful',
        type: 'feature',
        priority: 'TBD',
        status: 'VERIFIED',
        assigneeId: '36AGeYsrIZQcPYWlFb1a',
        dependsOn: [],
      },
      {
        id: 'SFhZrVn7zBWKEup3M6ZC',
        percentCompleted: 100,
        endsOn: 1690250700,
        github: {
          issue: {
            id: 1805209342,
            assignee: 'Aryex82',
            status: 'open',
            assigneeRdsInfo: {
              firstName: '',
              lastName: '',
              username: '',
            },
          },
        },
        createdBy: 'ankush',
        assignee: 'ajeyakrishna',
        title: "Clear cache related to tasks when there's an update",
        type: 'feature',
        priority: 'TBD',
        startedOn: 1689552640.848,
        status: 'VERIFIED',
        assigneeId: '36AGeYsrIZQcPYWlFb1a',
        dependsOn: [],
      },
    ],
    prev: '',
    next: '/tasks?dev=true&assignee=ajeyakrishna&size=3&next=vvTPGHAs9w36oY1UnV8r',
  },
  vvTPGHAs9w36oY1UnV8r: {
    message: 'Tasks returned successfully!',
    tasks: [
      {
        id: 'vvTPGHAs9w36oY1UnV8r',
        percentCompleted: 90,
        endsOn: 1699833600,
        github: {
          issue: {
            url: 'https://api.github.com/repos/Real-Dev-Squad/website-status/issues/977',
          },
        },
        assignee: 'ajeyakrishna',
        title:
          'Create a success message and close icon for task creation requests',
        type: 'feature',
        priority: 'TBD',
        startedOn: 1698883200,
        status: 'IN_PROGRESS',
        assigneeId: '36AGeYsrIZQcPYWlFb1a',
        dependsOn: [],
      },
      {
        id: '4P8Ax2YyssIX2y2kwGBX',
        percentCompleted: 100,
        endsOn: 1698221844,
        github: {
          issue: {
            html_url:
              'https://github.com/Real-Dev-Squad/website-backend/issues/1519',
            id: 1897464488,
            status: 'open',
          },
        },
        createdBy: 'ankush',
        assignee: 'ajeyakrishna',
        title: 'Design a Data restriction layer',
        type: 'feature',
        priority: 'TBD',
        status: 'VERIFIED',
        assigneeId: '36AGeYsrIZQcPYWlFb1a',
        dependsOn: [],
      },
      {
        id: 'hW1oz6pqeVeYg4GRT5qT',
        percentCompleted: 100,
        endsOn: 1691858954,
        github: {
          issue: {
            id: 1824823052,
            assignee: 'Aryex82',
            status: 'open',
            assigneeRdsInfo: {
              firstName: '',
              lastName: '',
              username: '',
            },
          },
        },
        createdBy: 'ankush',
        assignee: 'ajeyakrishna',
        title: 'Improve UI & UX of Extension Request Cards',
        type: 'feature',
        priority: 'TBD',
        startedOn: 1690590131.99,
        status: 'VERIFIED',
        assigneeId: '36AGeYsrIZQcPYWlFb1a',
        dependsOn: [],
      },
    ],
    prev: '/tasks?dev=true&assignee=ajeyakrishna&size=3&prev=SFhZrVn7zBWKEup3M6ZC',
    next: '/tasks?dev=true&assignee=ajeyakrishna&size=3&next=i1LQOKkGhhpOxE6yEo3A',
  },
  i1LQOKkGhhpOxE6yEo3A: {
    message: 'Tasks returned successfully!',
    tasks: [
      {
        id: 'i1LQOKkGhhpOxE6yEo3A',
        percentCompleted: 100,
        endsOn: 1690760553,
        github: {
          issue: {
            id: 1797904552,
            assignee: 'Aryex82',
            status: 'open',
            assigneeRdsInfo: {
              firstName: '',
              lastName: '',
              username: '',
            },
          },
        },
        createdBy: 'ankush',
        assignee: 'ajeyakrishna',
        title: 'Improve UX on input slider in task cards',
        type: 'feature',
        priority: 'TBD',
        startedOn: 1689901777.322,
        status: 'VERIFIED',
        assigneeId: '36AGeYsrIZQcPYWlFb1a',
        dependsOn: [],
      },
      {
        id: 'Djvf118D3Mo3VRhkF0g2',
        percentCompleted: 100,
        endsOn: 1693996834,
        github: {
          issue: {
            id: 1862345646,
            status: 'open',
          },
        },
        createdBy: 'ankush',
        assignee: 'ajeyakrishna',
        title: 'Merge Update user and external sync api ',
        type: 'feature',
        priority: 'TBD',
        status: 'VERIFIED',
        assigneeId: '36AGeYsrIZQcPYWlFb1a',
        dependsOn: [],
      },
      {
        id: 'HtC5LU45raW2YtwwxySA',
        percentCompleted: 70,
        endsOn: 1703634600,
        github: {
          issue: {
            url: 'https://api.github.com/repos/Real-Dev-Squad/website-backend/issues/1613',
          },
        },
        assignee: 'ajeyakrishna',
        title: 'Migrate old TaskRequest model schema to new one',
        type: 'feature',
        priority: 'TBD',
        startedOn: 1698192000,
        status: 'IN_PROGRESS',
        assigneeId: '36AGeYsrIZQcPYWlFb1a',
        dependsOn: [],
      },
    ],
    prev: '/tasks?dev=true&assignee=ajeyakrishna&size=3&prev=hW1oz6pqeVeYg4GRT5qT',
    next: '/tasks?dev=true&assignee=ajeyakrishna&size=3&next=OhNeSTj5J72PhrA4mtrr',
  },
  OhNeSTj5J72PhrA4mtrr: {
    message: 'Tasks returned successfully!',
    tasks: [
      {
        id: 'OhNeSTj5J72PhrA4mtrr',
        percentCompleted: 100,
        endsOn: 1698191717,
        github: {
          issue: {
            html_url:
              'https://github.com/Real-Dev-Squad/website-status/issues/920',
            id: 1930302167,
            assignee: 'Ajeyakrishna-k',
            status: 'open',
            assigneeRdsInfo: {
              firstName: 'Ajeyakrishna',
              lastName: 'Karanth',
              username: 'ajeyakrishna',
            },
          },
        },
        createdBy: 'amitprakash',
        assignee: 'ajeyakrishna',
        title: 'Milestone 1 release for Task creation request. ',
        type: 'feature',
        priority: 'TBD',
        startedOn: 1696605652,
        status: 'VERIFIED',
        assigneeId: '36AGeYsrIZQcPYWlFb1a',
        dependsOn: [],
      },
      {
        id: 'vDBopzwCEuPHDor7XXla',
        percentCompleted: 100,
        endsOn: 1693594060,
        github: {
          issue: {
            id: 1824822401,
            assignee: 'Aryex82',
            status: 'open',
            assigneeRdsInfo: {
              firstName: '',
              lastName: '',
              username: '',
            },
          },
        },
        createdBy: 'ankush',
        assignee: 'ajeyakrishna',
        title: 'Revamp UI & UX of Extensions Requests page',
        type: 'feature',
        priority: 'TBD',
        startedOn: 1692056863.291,
        status: 'VERIFIED',
        assigneeId: '36AGeYsrIZQcPYWlFb1a',
        dependsOn: [],
      },
      {
        id: 'kdoBS8Z30r2d7FQOonQx',
        percentCompleted: 100,
        endsOn: 1689258628,
        github: {
          issue: {
            id: 1779908116,
            assignee: 'Aryex82',
            status: 'open',
            assigneeRdsInfo: {
              firstName: '',
              lastName: '',
              username: '',
            },
          },
        },
        createdBy: 'ankush',
        assignee: 'ajeyakrishna',
        title: 'Task cards not reverting changes when api fails.',
        type: 'feature',
        priority: 'TBD',
        startedOn: 1688775795.152,
        status: 'VERIFIED',
        assigneeId: '36AGeYsrIZQcPYWlFb1a',
        dependsOn: [],
      },
    ],
    prev: '/tasks?dev=true&assignee=ajeyakrishna&size=3&prev=HtC5LU45raW2YtwwxySA',
    next: '',
  },
};
module.exports = { userDetailsApi, usersTasksInDev };
