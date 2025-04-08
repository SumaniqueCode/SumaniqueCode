interface Command {
    command: string;
    description: string;
    note?:string;
  }
  
 interface CommandSection {
    title: string;
    commands: Command[];
  }

  export interface CommandTemplateProps {
    section: CommandSection;
    secIdx:number;
  }
