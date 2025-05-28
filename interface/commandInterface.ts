interface Command {
    command: string;
    description: string;
    note?:string;
    alternateCommand?:string
  }
  
 interface CommandSection {
    title: string;
    commands: Command[];
  }

  export interface CommandTemplateProps {
    section: CommandSection;
    secIdx:number;
  }
