type Prospects = {
	id: number;
	name: string;
	last_name: string;
	email: string;
	phone: number;
	route_to_resume: string;
	status: ['ACTIVE'] | ['HIRED'] | ['NOT_IN_PROCESS'] | ['DISCARTED'] | ['PAUSED'] | ['ARCHIVED'];
	seniority: ['SENIOR'] | ['CONSULTANT'] | ['ANALYST'] | ['MANAGER'];
	job_title: ['BACKEND_DEVELOPER'] | ['FRONTEND_DEVELOPER'] | ['FULLSTACK_DEVELOPER'];
	capabilities: Capabilities[];
	sub_capabilities: Capabilities[];
	projects: Projects[];
}

type Capabilities = {
	id: number;
	name: string;
	type: 'MAIN_CAPABILITY' | 'SECONDARY_CAPABILITY';
	prospects: Prospects[];
	prospects_sub: Prospects[];
}

type Projects = {
	id: number;
	name: string;
	company: string;
	prospects: Prospects[];
	roster: Roster[];
	project_contacts: ProjectContacts[];
}

type Roster = {
	id: number;
	name: string;
	last_name: string;
	email: string;
	phone: number;
	route_to_resume: string;
	status: ["COMING_AVAILABLE"] | ["ASSIGNED"] | ["AVAILABLE"] | ["NOT_AVAILABLE"] | ["HOLD"];
	seniority: ['SENIOR'] | ['CONSULTANT'] | ['ANALYST'] | ['MANAGER'];
	job_title: ['BACKEND_DEVELOPER'] | ['FRONTEND_DEVELOPER'] | ['FULLSTACK_DEVELOPER'];
	capabilities: Capabilities[];
	sub_capabilities: Capabilities[];
	prospected_for: Projects[];
	project: Projects;
}
  
type ProjectContacts = {
	id: number;
	name: string;
	phone: number;
	project: Projects[];
}

export type { Prospects, Capabilities, Projects, Roster, ProjectContacts }