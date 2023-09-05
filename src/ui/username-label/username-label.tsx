import { UsernameLabelWrapper } from './username-label.styles';
import {UsernameLabel} from './username-label.styles';
import { CSSProperties } from 'react'; 

type UserNameLabelProps = {
  username: string;
  styles?: CSSProperties;
};

export const UserNameLabel: React.FC<UserNameLabelProps> = (props: UserNameLabelProps) => {

    const shortName = props.username.split(' ')[0].charAt(0) + props.username.split(' ')[1].charAt(0);


  return (
    <UsernameLabelWrapper style={props.styles}>
        <UsernameLabel>{shortName}</UsernameLabel>
      {props.username}
    </UsernameLabelWrapper>
  );
};