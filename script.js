// ========== DATABASE (localStorage) ==========
function getDB(key) {
  try { return JSON.parse(localStorage.getItem(key)); }
  catch { return null; }
}
function setDB(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ========== CONSTANTS ==========
const deptColors = {
  technical: { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  content: { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700' },
  design: { bg: 'bg-purple-50', text: 'text-purple-700', dot: 'bg-purple-500', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' },
  events: { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700' },
  research: { bg: 'bg-rose-50', text: 'text-rose-700', dot: 'bg-rose-500', border: 'border-rose-200', badge: 'bg-rose-100 text-rose-700' },
  outreach: { bg: 'bg-cyan-50', text: 'text-cyan-700', dot: 'bg-cyan-500', border: 'border-cyan-200', badge: 'bg-cyan-100 text-cyan-700' }
};

const deptNames = {
  technical: 'Technical', content: 'Content', design: 'Design',
  events: 'Events', research: 'Research', outreach: 'Outreach'
};

const priorityConfig = {
  low: { label: 'Low', bg: 'bg-gray-100', text: 'text-gray-600' },
  medium: { label: 'Medium', bg: 'bg-cyan-50', text: 'text-cyan-700' },
  high: { label: 'High', bg: 'bg-amber-50', text: 'text-amber-700' },
  urgent: { label: 'Urgent', bg: 'bg-rose-50', text: 'text-rose-700' }
};

const statusConfig = {
  todo: { label: 'To Do', color: 'bg-gray-400', light: 'bg-gray-50' },
  progress: { label: 'In Progress', color: 'bg-blue-500', light: 'bg-blue-50' },
  review: { label: 'Review', color: 'bg-amber-500', light: 'bg-amber-50' },
  done: { label: 'Done', color: 'bg-emerald-500', light: 'bg-emerald-50' }
};

// ========== SEED DATA ==========
const seedUsers = [
  { id: 1, firstName: 'Sarah', lastName: 'Chen', email: 'sarah@boson.org', password: 'password', dept: 'technical', role: 'Lead Developer', created: '2024-06-15' },
  { id: 2, firstName: 'Marcus', lastName: 'Rivera', email: 'marcus@boson.org', password: 'password', dept: 'technical', role: 'Backend Engineer', created: '2024-07-01' },
  { id: 3, firstName: 'Aisha', lastName: 'Patel', email: 'aisha@boson.org', password: 'password', dept: 'content', role: 'Science Writer', created: '2024-06-20' },
  { id: 4, firstName: 'James', lastName: 'Okonkwo', email: 'james@boson.org', password: 'password', dept: 'content', role: 'Content Strategist', created: '2024-08-10' },
  { id: 5, firstName: 'Luna', lastName: 'Kim', email: 'luna@boson.org', password: 'password', dept: 'design', role: 'UI/UX Designer', created: '2024-07-15' },
  { id: 6, firstName: 'Erik', lastName: 'Svensson', email: 'erik@boson.org', password: 'password', dept: 'design', role: 'Visual Designer', created: '2024-09-01' },
  { id: 7, firstName: 'Priya', lastName: 'Sharma', email: 'priya@boson.org', password: 'password', dept: 'events', role: 'Event Coordinator', created: '2024-06-25' },
  { id: 8, firstName: 'David', lastName: 'Moreau', email: 'david@boson.org', password: 'password', dept: 'events', role: 'Logistics Manager', created: '2024-08-05' },
  { id: 9, firstName: 'Fatima', lastName: 'Al-Rashid', email: 'fatima@boson.org', password: 'password', dept: 'research', role: 'Research Analyst', created: '2024-07-10' },
  { id: 10, firstName: 'Tomás', lastName: 'García', email: 'tomas@boson.org', password: 'password', dept: 'research', role: 'Data Scientist', created: '2024-09-15' },
  { id: 11, firstName: 'Nia', lastName: 'Williams', email: 'nia@boson.org', password: 'password', dept: 'outreach', role: 'Community Manager', created: '2024-08-20' },
  { id: 12, firstName: 'Kenji', lastName: 'Tanaka', email: 'kenji@boson.org', password: 'password', dept: 'outreach', role: 'Partnership Lead', created: '2024-10-01' }
];

const seedTasks = [
  { id: 1, title: 'Redesign particle physics interactive module', desc: 'Update the interactive simulation with new CERN data visualizations and improve UI responsiveness for mobile devices.', dept: 'technical', priority: 'high', status: 'progress', assignee: 1, due: '2025-02-15', created: '2025-01-20' },
  { id: 2, title: 'Write blog post on quantum entanglement', desc: 'Draft a 1500-word accessible article on recent quantum entanglement experiments for general audience.', dept: 'content', priority: 'medium', status: 'todo', assignee: 3, due: '2025-02-10', created: '2025-01-22' },
  { id: 3, title: 'Create event branding for Science Week 2025', desc: 'Design complete visual identity including logo, banners, social media kits, and merchandise mockups.', dept: 'design', priority: 'urgent', status: 'progress', assignee: 5, due: '2025-02-05', created: '2025-01-18' },
  { id: 4, title: 'Coordinate speaker lineup for webinar series', desc: 'Reach out to 8 potential speakers, confirm schedules, and prepare briefing documents for each session.', dept: 'events', priority: 'high', status: 'todo', assignee: 7, due: '2025-02-20', created: '2025-01-25' },
  { id: 5, title: 'Analyze survey data from outreach program', desc: 'Process and visualize data from the Q4 community survey. Prepare insights report for stakeholders.', dept: 'research', priority: 'medium', status: 'review', assignee: 9, due: '2025-02-08', created: '2025-01-15' },
  { id: 6, title: 'Launch social media campaign for podcast', desc: 'Plan and execute a 2-week promotional campaign across Twitter, LinkedIn, and Instagram for the new podcast season.', dept: 'outreach', priority: 'high', status: 'progress', assignee: 11, due: '2025-02-12', created: '2025-01-21' },
  { id: 7, title: 'API integration for data visualization dashboard', desc: 'Connect the new REST API endpoints to the real-time data dashboard and implement caching layer.', dept: 'technical', priority: 'urgent', status: 'todo', assignee: 2, due: '2025-02-03', created: '2025-01-19' },
  { id: 8, title: 'Edit and proofread climate science report', desc: 'Final edit pass on the 40-page climate communication report before submission to the journal.', dept: 'content', priority: 'high', status: 'review', assignee: 4, due: '2025-02-06', created: '2025-01-16' },
  { id: 9, title: 'Design infographic series on dark matter', desc: 'Create a set of 5 infographics explaining dark matter concepts for social media distribution.', dept: 'design', priority: 'medium', status: 'todo', assignee: 6, due: '2025-02-18', created: '2025-01-24' },
  { id: 10, title: 'Book venue for annual science festival', desc: 'Scout and finalize venue, negotiate contracts, and confirm accessibility compliance.', dept: 'events', priority: 'urgent', status: 'progress', assignee: 8, due: '2025-02-01', created: '2025-01-14' },
  { id: 11, title: 'Literature review on AI in science communication', desc: 'Compile and summarize 30+ recent papers on AI applications in science communication and public engagement.', dept: 'research', priority: 'low', status: 'todo', assignee: 10, due: '2025-03-01', created: '2025-01-26' },
  { id: 12, title: 'Build partnerships with local schools', desc: 'Establish collaboration agreements with 5 local high schools for the student mentorship program.', dept: 'outreach', priority: 'medium', status: 'done', assignee: 12, due: '2025-01-30', created: '2025-01-10' },
  { id: 13, title: 'Optimize mobile performance of web app', desc: 'Reduce LCP by 40% and improve Core Web Vitals scores across all science tool pages.', dept: 'technical', priority: 'high', status: 'done', assignee: 1, due: '2025-01-28', created: '2025-01-05' },
  { id: 14, title: 'Write script for explainer video on CRISPR', desc: 'Draft a 3-minute video script explaining CRISPR technology with accessible language and visual cues.', dept: 'content', priority: 'medium', status: 'done', assignee: 3, due: '2025-01-25', created: '2025-01-08' },
  { id: 15, title: 'Create motion graphics for intro sequence', desc: 'Design a 10-second animated intro for the YouTube channel featuring the Boson logo and particle effects.', dept: 'design', priority: 'low', status: 'done', assignee: 5, due: '2025-01-22', created: '2025-01-02' }
];

// ========== STATE ==========
let currentUser = null;
let tasks = [];
let teamMembers = [];
let currentView = 'dashboard';
let currentDept = 'all';
let currentStatusFilter = 'all';
let searchQuery = '';
let nextId = 16;

// ========== DATABASE INIT ==========
function seedDatabase() {
  if (getDB('boson_seeded')) return;

  const users = {};
  seedUsers.forEach(u => {
    users[u.id] = { ...u };
  });
  setDB('boson_users', users);
  setDB('boson_tasks', seedTasks);
  setDB('boson_seeded', true);
}

function loadTasks() {
  tasks = getDB('boson_tasks') || [];
  nextId = tasks.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

function saveTasks() {
  setDB('boson_tasks', tasks);
}

function loadTeamMembers() {
  const users = getDB('boson_users') || {};
  teamMembers = Object.values(users).map(u => ({
    id: u.id,
    name: u.firstName + ' ' + u.lastName,
    role: u.role,
    dept: u.dept,
    avatar: (u.firstName[0] + u.lastName[0]).toUpperCase(),
    img: 'http://static.photos/people/200x200/' + (u.id * 10)
  }));
}

function saveCurrentUser() {
  if (!currentUser) return;
  const users = getDB('boson_users') || {};
  users[currentUser.id] = currentUser;
  setDB('boson_users', users);
}

// ========== AUTH ==========
function switchAuthTab(tab) {
  const loginTab = document.getElementById('authTabLogin');
  const registerTab = document.getElementById('authTabRegister');
  const loginForm = document.getElementById('authLoginForm');
  const registerForm = document.getElementById('authRegisterForm');

  if (tab === 'login') {
    loginTab.classList.add('text-cyan-600', 'border-cyan-500', 'bg-cyan-50/50');
    loginTab.classList.remove('text-gray-400', 'border-transparent');
    registerTab.classList.remove('text-cyan-600', 'border-cyan-500', 'bg-cyan-50/50');
    registerTab.classList.add('text-gray-400', 'border-transparent');
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
  } else {
    registerTab.classList.add('text-cyan-600', 'border-cyan-500', 'bg-cyan-50/50');
    registerTab.classList.remove('text-gray-400', 'border-transparent');
    loginTab.classList.remove('text-cyan-600', 'border-cyan-500', 'bg-cyan-50/50');
    loginTab.classList.add('text-gray-400', 'border-transparent');
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
  }

  document.getElementById('loginError').classList.add('hidden');
  document.getElementById('registerError').classList.add('hidden');
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const errorEl = document.getElementById('loginError');

  const users = getDB('boson_users') || {};
  const user = Object.values(users).find(u => u.email === email && u.password === password);

  if (!user) {
    errorEl.textContent = 'Invalid email or password. Please try again.';
    errorEl.classList.remove('hidden');
    return;
  }

  errorEl.classList.add('hidden');
  currentUser = user;
  setDB('boson_session', user.id);
  hideAuth();
  updateSidebarUser();
  loadTasks();
  loadTeamMembers();
  renderAll();
}

function handleRegister(e) {
  e.preventDefault();
  const firstName = document.getElementById('regFirstName').value.trim();
  const lastName = document.getElementById('regLastName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const password = document.getElementById('regPassword').value;
  const dept = document.getElementById('regDept').value;
  const role = document.getElementById('regRole').value.trim();
  const errorEl = document.getElementById('registerError');

  const users = getDB('boson_users') || {};
  const emailExists = Object.values(users).find(u => u.email === email);
  if (emailExists) {
    errorEl.textContent = 'An account with this email already exists.';
    errorEl.classList.remove('hidden');
    return;
  }

  const maxId = Object.values(users).reduce((max, u) => Math.max(max, u.id), 0);
  const newId = maxId + 1;

  const newUser = {
    id: newId,
    firstName,
    lastName,
    email,
    password,
    dept,
    role,
    created: new Date().toISOString().split('T')[0]
  };

  users[newId] = newUser;
  setDB('boson_users', users);

  currentUser = newUser;
  setDB('boson_session', newId);
  hideAuth();
  updateSidebarUser();
  loadTasks();
  loadTeamMembers();
  renderAll();
}

function handleLogout() {
  currentUser = null;
  setDB('boson_session', null);
  showAuth();

  // Reset form fields
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
  document.getElementById('loginError').classList.add('hidden');
  switchAuthTab('login');
}

function checkAuth() {
  const userId = getDB('boson_session');
  if (!userId) return false;

  const users = getDB('boson_users') || {};
  const user = users[userId];
  if (!user) {
    setDB('boson_session', null);
    return false;
  }

  currentUser = user;
  return true;
}

function showAuth() {
  document.getElementById('authOverlay').classList.remove('hidden');
  document.getElementById('authOverlay').classList.add('flex');
  document.getElementById('sidebar').style.display = 'none';
  document.getElementById('mobileToggle').style.display = 'none';
  document.querySelector('main').style.display = 'none';
}

function hideAuth() {
  document.getElementById('authOverlay').classList.add('hidden');
  document.getElementById('authOverlay').classList.remove('flex');
  document.getElementById('sidebar').style.display = '';
  document.getElementById('mobileToggle').style.display = '';
  document.querySelector('main').style.display = '';
}

function updateSidebarUser() {
  if (!currentUser) return;
  const initials = (currentUser.firstName[0] + currentUser.lastName[0]).toUpperCase();
  document.getElementById('sidebarAvatar').textContent = initials;
  document.getElementById('sidebarUserName').textContent = currentUser.firstName + ' ' + currentUser.lastName;
  document.getElementById('sidebarUserRole').textContent = currentUser.role;
}

// ========== VIEW SWITCHING ==========
function switchView(view) {
  currentView = view;
  document.querySelectorAll('.view-content').forEach(el => el.classList.add('hidden'));
  const viewEl = document.getElementById(`view-${view}`);
  if (viewEl) viewEl.classList.remove('hidden');

  document.querySelectorAll('[data-nav]').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-nav="${view}"]`)?.classList.add('active');

  const titles = {
    dashboard: ['Dashboard', 'Overview of all tasks and departments'],
    kanban: ['Kanban Board', 'Visual task tracking across statuses'],
    tasks: ['All Tasks', 'Complete list of all tasks'],
    team: ['Team Members', 'Manage your team across departments'],
    profile: ['My Profile', 'View and manage your account']
  };
  document.getElementById('pageTitle').textContent = titles[view]?.[0] || 'Dashboard';
  document.getElementById('pageSubtitle').textContent = titles[view]?.[1] || '';

  renderAll();
  closeSidebarMobile();
}

function filterDept(dept) {
  currentDept = dept;
  document.querySelectorAll('.dept-nav').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-dept="${dept}"]`)?.classList.add('active');
  renderAll();
}

function filterTasksByStatus(status) {
  currentStatusFilter = status;
  document.querySelectorAll('.task-filter').forEach(btn => {
    btn.classList.remove('bg-cyan-50', 'text-cyan-700');
    btn.classList.add('bg-gray-100', 'text-gray-600');
  });
  const active = document.querySelector(`[data-tfilter="${status}"]`);
  if (active) {
    active.classList.remove('bg-gray-100', 'text-gray-600');
    active.classList.add('bg-cyan-50', 'text-cyan-700');
  }
  renderTaskList();
}

function handleSearch(q) {
  searchQuery = q.toLowerCase();
  renderAll();
}

// ========== HELPERS ==========
function getFilteredTasks() {
  return tasks.filter(t => {
    const matchDept = currentDept === 'all' || t.dept === currentDept;
    const matchSearch = !searchQuery || t.title.toLowerCase().includes(searchQuery) || t.desc.toLowerCase().includes(searchQuery);
    return matchDept && matchSearch;
  });
}

function getMember(id) {
  return teamMembers.find(m => m.id === id) || { name: 'Unassigned', avatar: '?', dept: '' };
}

function formatDate(d) {
  if (!d) return '';
  const date = new Date(d);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function isOverdue(d) {
  if (!d) return false;
  return new Date(d) < new Date() && new Date(d).toDateString() !== new Date().toDateString();
}

// ========== RENDER: DASHBOARD ==========
function renderDashboard() {
  const filtered = getFilteredTasks();
  document.getElementById('statTotal').textContent = filtered.length;
  document.getElementById('statProgress').textContent = filtered.filter(t => t.status === 'progress').length;
  document.getElementById('statDone').textContent = filtered.filter(t => t.status === 'done').length;
  document.getElementById('statUrgent').textContent = filtered.filter(t => t.priority === 'urgent' || t.priority === 'high').length;

  // Department Progress
  const depts = currentDept === 'all' ? Object.keys(deptColors) : [currentDept];
  let progressHTML = '';
  depts.forEach(dept => {
    const deptTasks = tasks.filter(t => t.dept === dept);
    if (deptTasks.length === 0) return;
    const done = deptTasks.filter(t => t.status === 'done').length;
    const pct = Math.round((done / deptTasks.length) * 100);
    const c = deptColors[dept];
    progressHTML += `
      <div class="flex items-center gap-4">
        <span class="w-2 h-2 ${c.dot} rounded-full flex-shrink-0"></span>
        <span class="text-sm font-medium text-gray-700 w-24 flex-shrink-0">${deptNames[dept]}</span>
        <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div class="progress-bar h-full ${c.dot} rounded-full" style="width: ${pct}%"></div>
        </div>
        <span class="text-xs font-semibold text-gray-500 w-12 text-right">${pct}%</span>
        <span class="text-[11px] text-gray-400 w-20 text-right">${done}/${deptTasks.length} done</span>
      </div>`;
  });
  document.getElementById('deptProgress').innerHTML = progressHTML || '<p class="text-sm text-gray-400">No tasks found</p>';

  // Recent Activity
  const recent = [...filtered].sort((a, b) => new Date(b.created) - new Date(a.created)).slice(0, 6);
  let actHTML = '';
  recent.forEach(t => {
    const m = getMember(t.assignee);
    const c = deptColors[t.dept];
    actHTML += `
      <div class="flex items-start gap-3">
        <div class="w-8 h-8 rounded-full ${c.bg} flex items-center justify-center flex-shrink-0 mt-0.5">
          <span class="text-[10px] font-bold ${c.text}">${m.avatar}</span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-medium text-gray-800 truncate">${t.title}</p>
          <p class="text-[11px] text-gray-400">${m.name} · ${formatDate(t.created)}</p>
        </div>
      </div>`;
  });
  document.getElementById('recentActivity').innerHTML = actHTML || '<p class="text-sm text-gray-400">No activity</p>';

  // Recent Tasks
  const recentTasks = [...filtered].sort((a, b) => new Date(b.created) - new Date(a.created)).slice(0, 5);
  let taskHTML = '';
  recentTasks.forEach(t => {
    const c = deptColors[t.dept];
    const p = priorityConfig[t.priority];
    const m = getMember(t.assignee);
    const overdue = isOverdue(t.due) && t.status !== 'done';
    taskHTML += `
      <div class="task-card flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition" onclick="openDetail(${t.id})">
        <div class="w-2 h-2 ${c.dot} rounded-full flex-shrink-0"></div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-800 truncate">${t.title}</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-[11px] ${c.badge} px-1.5 py-0.5 rounded">${deptNames[t.dept]}</span>
            <span class="text-[11px] ${p.bg} ${p.text} px-1.5 py-0.5 rounded">${p.label}</span>
          </div>
        </div>
        <div class="text-right flex-shrink-0">
          <p class="text-[11px] ${overdue ? 'text-rose-600 font-semibold' : 'text-gray-400'}">${formatDate(t.due)}</p>
          <p class="text-[11px] text-gray-400">${m.name.split(' ')[0]}</p>
        </div>
      </div>`;
  });
  document.getElementById('recentTasks').innerHTML = taskHTML || '<p class="text-sm text-gray-400 py-4">No tasks found</p>';
}

// ========== RENDER: KANBAN ==========
function renderKanban() {
  const filtered = getFilteredTasks();
  const columns = ['todo', 'progress', 'review', 'done'];
  let html = '';

  columns.forEach(status => {
    const cfg = statusConfig[status];
    const colTasks = filtered.filter(t => t.status === status);
    html += `
      <div class="kanban-col flex-shrink-0 w-72 lg:w-80">
        <div class="flex items-center gap-2 mb-4 px-1">
          <span class="w-2.5 h-2.5 ${cfg.color} rounded-full"></span>
          <h3 class="text-sm font-bold text-gray-800">${cfg.label}</h3>
          <span class="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full ml-auto">${colTasks.length}</span>
        </div>
        <div class="space-y-3">`;

    colTasks.forEach(t => {
      const c = deptColors[t.dept];
      const p = priorityConfig[t.priority];
      const m = getMember(t.assignee);
      const overdue = isOverdue(t.due) && t.status !== 'done';
      const nextStatuses = getNextStatuses(status);

      html += `
          <div class="task-card bg-white rounded-xl p-4 border border-gray-100 cursor-pointer" onclick="openDetail(${t.id})">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-[10px] ${c.badge} px-1.5 py-0.5 rounded font-semibold">${deptNames[t.dept]}</span>
              <span class="text-[10px] ${p.bg} ${p.text} px-1.5 py-0.5 rounded font-semibold">${p.label}</span>
            </div>
            <p class="text-sm font-semibold text-gray-800 mb-2 leading-snug">${t.title}</p>
            <p class="text-xs text-gray-400 mb-3 line-clamp-2">${t.desc}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full ${c.bg} flex items-center justify-center">
                  <span class="text-[9px] font-bold ${c.text}">${m.avatar}</span>
                </div>
                <span class="text-[11px] text-gray-500">${m.name.split(' ')[0]}</span>
              </div>
              <div class="flex items-center gap-1.5">
                ${overdue ? '<span class="text-[10px] text-rose-600 font-semibold">Overdue</span>' : `<span class="text-[11px] text-gray-400">${formatDate(t.due)}</span>`}
              </div>
            </div>
            ${nextStatuses.length ? `
            <div class="flex gap-1.5 mt-3 pt-3 border-t border-gray-50">
              ${nextStatuses.map(ns => `
                <button onclick="event.stopPropagation(); moveTask(${t.id}, '${ns}')" class="text-[10px] font-semibold px-2 py-1 rounded-lg ${statusConfig[ns].light} ${statusConfig[ns].color.replace('bg-', 'text-').replace('-500', '-600').replace('-400', '-500')} hover:opacity-80 transition">
                  → ${statusConfig[ns].label}
                </button>
              `).join('')}
            </div>` : ''}
          </div>`;
    });

    html += `</div></div>`;
  });

  document.getElementById('kanbanBoard').innerHTML = html;
}

function getNextStatuses(current) {
  const flow = { todo: ['progress'], progress: ['review', 'todo'], review: ['done', 'progress'], done: ['todo'] };
  return flow[current] || [];
}

function moveTask(id, newStatus) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.status = newStatus;
    saveTasks();
    renderAll();
  }
}

// ========== RENDER: TASK LIST ==========
function renderTaskList() {
  let filtered = getFilteredTasks();
  if (currentStatusFilter !== 'all') {
    filtered = filtered.filter(t => t.status === currentStatusFilter);
  }

  if (searchQuery) {
    filtered = filtered.filter(t => t.title.toLowerCase().includes(searchQuery) || t.desc.toLowerCase().includes(searchQuery));
  }

  let html = '';
  if (filtered.length === 0) {
    html = '<div class="p-8 text-center"><p class="text-gray-400 text-sm">No tasks found</p></div>';
  } else {
    filtered.forEach(t => {
      const c = deptColors[t.dept];
      const p = priorityConfig[t.priority];
      const s = statusConfig[t.status];
      const m = getMember(t.assignee);
      const overdue = isOverdue(t.due) && t.status !== 'done';
      html += `
        <div class="task-card flex items-center gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition" onclick="openDetail(${t.id})">
          <div class="flex-shrink-0">
            <div class="w-3 h-3 ${s.color} rounded-full"></div>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <p class="text-sm font-semibold text-gray-800 truncate">${t.title}</p>
              ${overdue ? '<span class="text-[10px] bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded font-semibold flex-shrink-0">Overdue</span>' : ''}
            </div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-[11px] ${c.badge} px-1.5 py-0.5 rounded font-medium">${deptNames[t.dept]}</span>
              <span class="text-[11px] ${p.bg} ${p.text} px-1.5 py-0.5 rounded font-medium">${p.label}</span>
              <span class="text-[11px] ${s.light} ${s.color.replace('bg-', 'text-').replace('-400', '-500').replace('-500', '-600')} px-1.5 py-0.5 rounded font-medium">${s.label}</span>
            </div>
          </div>
          <div class="hidden sm:flex items-center gap-3 flex-shrink-0">
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-full ${c.bg} flex items-center justify-center">
                <span class="text-[9px] font-bold ${c.text}">${m.avatar}</span>
              </div>
              <span class="text-xs text-gray-600">${m.name}</span>
            </div>
            <span class="text-xs text-gray-400 w-20 text-right">${formatDate(t.due)}</span>
          </div>
          <button onclick="event.stopPropagation(); deleteTask(${t.id})" class="p-1.5 hover:bg-rose-50 rounded-lg transition group flex-shrink-0">
            <i data-lucide="trash-2" class="w-3.5 h-3.5 text-gray-300 group-hover:text-rose-500"></i>
          </button>
        </div>`;
    });
  }
  document.getElementById('taskList').innerHTML = html;
  lucide.createIcons();
}

// ========== RENDER: TEAM ==========
function renderTeam() {
  const depts = currentDept === 'all' ? Object.keys(deptColors) : [currentDept];
  let html = '';

  depts.forEach(dept => {
    const members = teamMembers.filter(m => m.dept === dept);
    if (members.length === 0) return;
    const c = deptColors[dept];
    const deptTasks = tasks.filter(t => t.dept === dept);
    const doneTasks = deptTasks.filter(t => t.status === 'done').length;

    html += `
      <div class="bg-white rounded-2xl border border-gray-100 p-6 sm:col-span-2 lg:col-span-3">
        <div class="flex items-center gap-3 mb-4">
          <span class="w-3 h-3 ${c.dot} rounded-full"></span>
          <h3 class="font-bold text-gray-900">${deptNames[dept]} Team</h3>
          <span class="text-xs text-gray-400">${deptTasks.length} tasks · ${doneTasks} completed</span>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">`;

    members.forEach(m => {
      const memberTasks = tasks.filter(t => t.assignee === m.id);
      const memberDone = memberTasks.filter(t => t.status === 'done').length;
      const isCurrentUser = currentUser && m.id === currentUser.id;
      html += `
          <div class="dept-badge flex items-center gap-3 p-3 ${c.bg} rounded-xl border ${c.border} ${isCurrentUser ? 'ring-2 ring-cyan-400 ring-offset-1' : ''}">
            <img src="${m.img}" alt="${m.name}" class="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
            <div class="w-10 h-10 rounded-full ${c.dot} items-center justify-center text-white text-sm font-bold shadow-sm hidden">${m.avatar}</div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800 truncate">${m.name}${isCurrentUser ? ' <span class="text-[10px] text-cyan-600">(You)</span>' : ''}</p>
              <p class="text-[11px] text-gray-500">${m.role}</p>
              <p class="text-[10px] ${c.text} font-medium">${memberDone}/${memberTasks.length} tasks done</p>
            </div>
          </div>`;
    });

    html += `</div></div>`;
  });

  document.getElementById('teamGrid').innerHTML = html || '<p class="text-gray-400 text-sm col-span-3 text-center py-8">No team members found</p>';
}

// ========== RENDER: PROFILE ==========
function renderProfile() {
  if (!currentUser) return;
  const c = deptColors[currentUser.dept] || deptColors.technical;
  const initials = (currentUser.firstName[0] + currentUser.lastName[0]).toUpperCase();

  const myTasks = tasks.filter(t => t.assignee === currentUser.id);
  const myDone = myTasks.filter(t => t.status === 'done').length;
  const myProgress = myTasks.filter(t => t.status === 'progress').length;
  const myTodo = myTasks.filter(t => t.status === 'todo').length;
  const myReview = myTasks.filter(t => t.status === 'review').length;
  const myUrgent = myTasks.filter(t => t.priority === 'urgent' || t.priority === 'high').length;
  const completionRate = myTasks.length > 0 ? Math.round((myDone / myTasks.length) * 100) : 0;

  let html = `
    <!-- Profile Header -->
    <div class="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-cyan-200">${initials}</div>
        <div class="flex-1 text-center sm:text-left">
          <h2 class="text-2xl font-bold text-gray-900">${currentUser.firstName} ${currentUser.lastName}</h2>
          <p class="text-sm text-gray-500 mt-1">${currentUser.role} · <span class="${c.text} font-medium">${deptNames[currentUser.dept]} Department</span></p>
          <p class="text-xs text-gray-400 mt-1">${currentUser.email}</p>
          <p class="text-[11px] text-gray-400 mt-1">Member since ${formatDate(currentUser.created)}</p>
          <div class="mt-3 flex gap-2 justify-center sm:justify-start">
            <button onclick="openProfileModal()" class="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-cyan-200 transition-all">
              <i data-lucide="pencil" class="w-3.5 h-3.5"></i> Edit Profile
            </button>
            <button onclick="handleLogout()" class="flex items-center gap-2 border border-gray-200 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-600 px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 transition-all">
              <i data-lucide="log-out" class="w-3.5 h-3.5"></i> Sign Out
            </button>
          </div>
        </div>
        <div class="sm:ml-auto text-center">
          <div class="relative w-24 h-24">
            <svg class="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" stroke-width="3"/>
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#06b6d4" stroke-width="3" stroke-dasharray="${completionRate}, 100" stroke-linecap="round"/>
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-xl font-bold text-gray-900">${completionRate}%</span>
            </div>
          </div>
          <p class="text-[11px] text-gray-400 mt-1">Completion Rate</p>
        </div>
      </div>
    </div>

    <!-- Profile Stats -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      <div class="stat-card bg-white rounded-2xl p-5 border border-gray-100 text-center">
        <div class="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-2">
          <i data-lucide="list-checks" class="w-5 h-5 text-gray-600"></i>
        </div>
        <p class="text-2xl font-bold text-gray-900">${myTasks.length}</p>
        <p class="text-xs text-gray-400">My Tasks</p>
      </div>
      <div class="stat-card bg-white rounded-2xl p-5 border border-gray-100 text-center">
        <div class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-2">
          <i data-lucide="clock" class="w-5 h-5 text-blue-600"></i>
        </div>
        <p class="text-2xl font-bold text-gray-900">${myProgress}</p>
        <p class="text-xs text-gray-400">In Progress</p>
      </div>
      <div class="stat-card bg-white rounded-2xl p-5 border border-gray-100 text-center">
        <div class="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-2">
          <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600"></i>
        </div>
        <p class="text-2xl font-bold text-gray-900">${myDone}</p>
        <p class="text-xs text-gray-400">Completed</p>
      </div>
      <div class="stat-card bg-white rounded-2xl p-5 border border-gray-100 text-center">
        <div class="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center mx-auto mb-2">
          <i data-lucide="alert-triangle" class="w-5 h-5 text-rose-600"></i>
        </div>
        <p class="text-2xl font-bold text-gray-900">${myUrgent}</p>
        <p class="text-xs text-gray-400">High Priority</p>
      </div>
    </div>

    <!-- Task Breakdown -->
    <div class="grid lg:grid-cols-3 gap-6 mb-6">
      <div class="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 class="font-bold text-gray-900 mb-4">Status Breakdown</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2"><span class="w-2.5 h-2.5 bg-gray-400 rounded-full"></span><span class="text-sm text-gray-600">To Do</span></div>
            <span class="text-sm font-bold text-gray-900">${myTodo}</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2"><span class="w-2.5 h-2.5 bg-blue-500 rounded-full"></span><span class="text-sm text-gray-600">In Progress</span></div>
            <span class="text-sm font-bold text-gray-900">${myProgress}</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2"><span class="w-2.5 h-2.5 bg-amber-500 rounded-full"></span><span class="text-sm text-gray-600">Review</span></div>
            <span class="text-sm font-bold text-gray-900">${myReview}</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2"><span class="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span><span class="text-sm text-gray-600">Done</span></div>
            <span class="text-sm font-bold text-gray-900">${myDone}</span>
          </div>
        </div>
        <!-- Mini progress bar -->
        <div class="mt-4 flex h-3 rounded-full overflow-hidden bg-gray-100">
          ${myTasks.length > 0 ? `
          <div class="bg-gray-400" style="width:${(myTodo / myTasks.length) * 100}%"></div>
          <div class="bg-blue-500" style="width:${(myProgress / myTasks.length) * 100}%"></div>
          <div class="bg-amber-500" style="width:${(myReview / myTasks.length) * 100}%"></div>
          <div class="bg-emerald-500" style="width:${(myDone / myTasks.length) * 100}%"></div>
          ` : ''}
        </div>
      </div>

      <!-- My Assigned Tasks -->
      <div class="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-bold text-gray-900">My Assigned Tasks</h3>
          <button onclick="switchView('tasks')" class="text-xs text-cyan-600 hover:text-cyan-700 font-semibold transition">View All →</button>
        </div>
        <div class="space-y-3">`;

  const myRecentTasks = [...myTasks].sort((a, b) => new Date(b.created) - new Date(a.created)).slice(0, 5);
  if (myRecentTasks.length === 0) {
    html += '<p class="text-sm text-gray-400 text-center py-4">No tasks assigned to you yet</p>';
  } else {
    myRecentTasks.forEach(t => {
      const p = priorityConfig[t.priority];
      const s = statusConfig[t.status];
      const overdue = isOverdue(t.due) && t.status !== 'done';
      html += `
          <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition" onclick="openDetail(${t.id})">
            <div class="w-2.5 h-2.5 ${s.color} rounded-full flex-shrink-0"></div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-800 truncate">${t.title}</p>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-[11px] ${p.bg} ${p.text} px-1.5 py-0.5 rounded">${p.label}</span>
                <span class="text-[11px] ${s.light} ${s.color.replace('bg-', 'text-').replace('-400', '-500').replace('-500', '-600')} px-1.5 py-0.5 rounded">${s.label}</span>
              </div>
            </div>
            <span class="text-[11px] ${overdue ? 'text-rose-600 font-semibold' : 'text-gray-400'} flex-shrink-0">${formatDate(t.due)}</span>
          </div>`;
    });
  }

  html += `
        </div>
      </div>
    </div>

    <!-- Department Activity -->
    <div class="bg-white rounded-2xl border border-gray-100 p-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-gray-900">Department Activity</h3>
        <span class="text-xs text-gray-400">${deptNames[currentUser.dept]} · ${tasks.filter(t => t.dept === currentUser.dept).length} total tasks</span>
      </div>
      <div class="flex h-3 rounded-full overflow-hidden bg-gray-100">`;

  const deptTasksAll = tasks.filter(t => t.dept === currentUser.dept);
  if (deptTasksAll.length > 0) {
    const dTodo = deptTasksAll.filter(t => t.status === 'todo').length;
    const dProgress = deptTasksAll.filter(t => t.status === 'progress').length;
    const dReview = deptTasksAll.filter(t => t.status === 'review').length;
    const dDone = deptTasksAll.filter(t => t.status === 'done').length;
    html += `
        <div class="bg-gray-400" style="width:${(dTodo / deptTasksAll.length) * 100}%"></div>
        <div class="bg-blue-500" style="width:${(dProgress / deptTasksAll.length) * 100}%"></div>
        <div class="bg-amber-500" style="width:${(dReview / deptTasksAll.length) * 100}%"></div>
        <div class="bg-emerald-500" style="width:${(dDone / deptTasksAll.length) * 100}%"></div>`;
  }

  html += `
      </div>
      <div class="flex gap-4 mt-3 flex-wrap">
        <span class="flex items-center gap-1.5 text-[11px] text-gray-500"><span class="w-2 h-2 bg-gray-400 rounded-full"></span>To Do: ${deptTasksAll.filter(t => t.status === 'todo').length}</span>
        <span class="flex items-center gap-1.5 text-[11px] text-gray-500"><span class="w-2 h-2 bg-blue-500 rounded-full"></span>In Progress: ${deptTasksAll.filter(t => t.status === 'progress').length}</span>
        <span class="flex items-center gap-1.5 text-[11px] text-gray-500"><span class="w-2 h-2 bg-amber-500 rounded-full"></span>Review: ${deptTasksAll.filter(t => t.status === 'review').length}</span>
        <span class="flex items-center gap-1.5 text-[11px] text-gray-500"><span class="w-2 h-2 bg-emerald-500 rounded-full"></span>Done: ${deptTasksAll.filter(t => t.status === 'done').length}</span>
      </div>
    </div>`;

  document.getElementById('profileContent').innerHTML = html;
}

// ========== PROFILE MODAL ==========
function openProfileModal() {
  if (!currentUser) return;
  document.getElementById('profileFirstName').value = currentUser.firstName;
  document.getElementById('profileLastName').value = currentUser.lastName;
  document.getElementById('profileEmail').value = currentUser.email;
  document.getElementById('profileDept').value = currentUser.dept;
  document.getElementById('profileRole').value = currentUser.role;
  document.getElementById('profileCurrentPwd').value = '';
  document.getElementById('profileNewPwd').value = '';
  document.getElementById('profileConfirmPwd').value = '';
  document.getElementById('profileError').classList.add('hidden');
  document.getElementById('profileSuccess').classList.add('hidden');

  const modal = document.getElementById('profileModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeProfileModal() {
  const modal = document.getElementById('profileModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function saveProfile(e) {
  e.preventDefault();
  const firstName = document.getElementById('profileFirstName').value.trim();
  const lastName = document.getElementById('profileLastName').value.trim();
  const dept = document.getElementById('profileDept').value;
  const role = document.getElementById('profileRole').value.trim();
  const currentPwd = document.getElementById('profileCurrentPwd').value;
  const newPwd = document.getElementById('profileNewPwd').value;
  const confirmPwd = document.getElementById('profileConfirmPwd').value;
  const errorEl = document.getElementById('profileError');
  const successEl = document.getElementById('profileSuccess');

  errorEl.classList.add('hidden');
  successEl.classList.add('hidden');

  // Handle password change
  if (currentPwd || newPwd || confirmPwd) {
    if (currentPwd !== currentUser.password) {
      errorEl.textContent = 'Current password is incorrect.';
      errorEl.classList.remove('hidden');
      return;
    }
    if (newPwd.length < 6) {
      errorEl.textContent = 'New password must be at least 6 characters.';
      errorEl.classList.remove('hidden');
      return;
    }
    if (newPwd !== confirmPwd) {
      errorEl.textContent = 'New passwords do not match.';
      errorEl.classList.remove('hidden');
      return;
    }
    currentUser.password = newPwd;
  }

  // Update user data
  currentUser.firstName = firstName;
  currentUser.lastName = lastName;
  currentUser.dept = dept;
  currentUser.role = role;

  saveCurrentUser();
  loadTeamMembers();
  updateSidebarUser();

  successEl.textContent = 'Profile updated successfully!';
  successEl.classList.remove('hidden');

  // Refresh profile view if active
  if (currentView === 'profile') {
    renderProfile();
  }

  // Auto-close modal after brief success display
  setTimeout(() => {
    closeProfileModal();
  }, 1200);
}

// ========== TASK MODAL ==========
function openModal() {
  const modal = document.getElementById('taskModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  populateAssignees();
}

function closeModal() {
  const modal = document.getElementById('taskModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function populateAssignees() {
  const sel = document.getElementById('taskAssignee');
  const dept = document.getElementById('taskDept').value;
  const members = teamMembers.filter(m => m.dept === dept);
  sel.innerHTML = members.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
}

function createTask(e) {
  e.preventDefault();
  const title = document.getElementById('taskTitle').value.trim();
  const desc = document.getElementById('taskDesc').value.trim();
  const dept = document.getElementById('taskDept').value;
  const priority = document.getElementById('taskPriority').value;
  const assignee = parseInt(document.getElementById('taskAssignee').value);
  const due = document.getElementById('taskDue').value;

  if (!title) return;

  const task = {
    id: nextId++,
    title,
    desc: desc || 'No description provided.',
    dept,
    priority,
    status: 'todo',
    assignee,
    due: due || '',
    created: new Date().toISOString().split('T')[0]
  };

  tasks.unshift(task);
  saveTasks();
  closeModal();
  e.target.reset();
  renderAll();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderAll();
}

// ========== TASK DETAIL ==========
function openDetail(id) {
  const t = tasks.find(task => task.id === id);
  if (!t) return;

  const c = deptColors[t.dept];
  const p = priorityConfig[t.priority];
  const s = statusConfig[t.status];
  const m = getMember(t.assignee);
  const overdue = isOverdue(t.due) && t.status !== 'done';
  const nextStatuses = getNextStatuses(t.status);

  const html = `
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-2">
        <span class="text-[11px] ${c.badge} px-2 py-0.5 rounded-lg font-semibold">${deptNames[t.dept]}</span>
        <span class="text-[11px] ${p.bg} ${p.text} px-2 py-0.5 rounded-lg font-semibold">${p.label}</span>
        <span class="text-[11px] ${s.light} ${s.color.replace('bg-', 'text-').replace('-400', '-500').replace('-500', '-600')} px-2 py-0.5 rounded-lg font-semibold">${s.label}</span>
      </div>
      <button onclick="closeDetail()" class="p-1 hover:bg-gray-100 rounded-lg transition">
        <i data-lucide="x" class="w-5 h-5 text-gray-500"></i>
      </button>
    </div>
    <h3 class="text-lg font-bold text-gray-900 mb-3">${t.title}</h3>
    <p class="text-sm text-gray-500 mb-6 leading-relaxed">${t.desc}</p>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-50 rounded-xl p-3">
        <p class="text-[10px] text-gray-400 uppercase font-bold tracking-wide mb-1">Assignee</p>
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-full ${c.bg} flex items-center justify-center">
            <span class="text-[9px] font-bold ${c.text}">${m.avatar}</span>
          </div>
          <span class="text-sm font-medium text-gray-800">${m.name}</span>
        </div>
      </div>
      <div class="bg-gray-50 rounded-xl p-3">
        <p class="text-[10px] text-gray-400 uppercase font-bold tracking-wide mb-1">Due Date</p>
        <p class="text-sm font-medium ${overdue ? 'text-rose-600' : 'text-gray-800'}">${t.due ? formatDate(t.due) : 'No date'} ${overdue ? '⚠️' : ''}</p>
      </div>
      <div class="bg-gray-50 rounded-xl p-3">
        <p class="text-[10px] text-gray-400 uppercase font-bold tracking-wide mb-1">Created</p>
        <p class="text-sm font-medium text-gray-800">${formatDate(t.created)}</p>
      </div>
      <div class="bg-gray-50 rounded-xl p-3">
        <p class="text-[10px] text-gray-400 uppercase font-bold tracking-wide mb-1">Task ID</p>
        <p class="text-sm font-medium text-gray-800">#BOS-${String(t.id).padStart(3, '0')}</p>
      </div>
    </div>

    ${nextStatuses.length ? `
    <div class="border-t border-gray-100 pt-4">
      <p class="text-[10px] text-gray-400 uppercase font-bold tracking-wide mb-3">Move to</p>
      <div class="flex gap-2">
        ${nextStatuses.map(ns => `
          <button onclick="moveTask(${t.id}, '${ns}'); closeDetail();" class="flex-1 py-2.5 rounded-xl text-sm font-semibold ${statusConfig[ns].light} ${statusConfig[ns].color.replace('bg-', 'text-').replace('-500', '-600').replace('-400', '-500')} hover:opacity-80 transition text-center">
            ${statusConfig[ns].label}
          </button>
        `).join('')}
      </div>
    </div>` : ''}

    <div class="border-t border-gray-100 pt-4 mt-4">
      <button onclick="deleteTask(${t.id}); closeDetail();" class="w-full py-2.5 rounded-xl text-sm font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 transition">
        Delete Task
      </button>
    </div>
  `;

  document.getElementById('detailContent').innerHTML = html;
  const modal = document.getElementById('detailModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

function closeDetail() {
  const modal = document.getElementById('detailModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// ========== SIDEBAR ==========
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('-translate-x-full');
}

function closeSidebarMobile() {
  if (window.innerWidth < 1024) {
    document.getElementById('sidebar').classList.add('-translate-x-full');
  }
}

// ========== RENDER ALL ==========
function renderAll() {
  switch (currentView) {
    case 'dashboard': renderDashboard(); break;
    case 'kanban': renderKanban(); break;
    case 'tasks': renderTaskList(); break;
    case 'team': renderTeam(); break;
    case 'profile': renderProfile(); break;
  }
  lucide.createIcons();
}

// ========== INIT ==========
function init() {
  seedDatabase();

  if (!checkAuth()) {
    showAuth();
    lucide.createIcons();
    return;
  }

  hideAuth();
  updateSidebarUser();
  loadTasks();
  loadTeamMembers();

  // Mobile sidebar
  if (window.innerWidth < 1024) {
    document.getElementById('sidebar').classList.add('-translate-x-full');
  }

  // Set default due date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 7);
  document.getElementById('taskDue').value = tomorrow.toISOString().split('T')[0];

  // Listen for dept change to update assignees
  document.getElementById('taskDept').addEventListener('change', populateAssignees);

  // Close modals on overlay click
  document.getElementById('taskModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.getElementById('detailModal').addEventListener('click', function(e) {
    if (e.target === this) closeDetail();
  });
  document.getElementById('profileModal').addEventListener('click', function(e) {
    if (e.target === this) closeProfileModal();
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
      closeDetail();
      closeProfileModal();
    }
  });

  populateAssignees();
  renderAll();
}

document.addEventListener('DOMContentLoaded', init);
