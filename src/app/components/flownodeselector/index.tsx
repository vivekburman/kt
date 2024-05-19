"use client";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ArrowLine, BiDirectionalArrowLine, CircleShape, DiamondShape, EllipticalShape, 
	LambdaFunction, MultipleServer, ParallelArrowLine, RectangleShape, Server, Database, 
	TextIcon, TriangleShape, 
	LoadBalancer,
	Nginx,
	Redis,
	MessageQueue,
	User,
	CDN,
	VirtualMachine,
	CloudStorage,
	Kubernetes} from '@components/icons';

const borderRadius = {"borderRadius": "3px"};
export default function FlowNodeSelector() {
    return (
        <div className="kts-flownodeselector-component">
			<Accordion defaultExpanded className="!m-0">
				<AccordionSummary id="shapesLines" className="kts-section-header"
				expandIcon={<ExpandMoreIcon />}>
					Shapes & Lines
				</AccordionSummary>
				<Divider orientation="horizontal" flexItem />
				<AccordionDetails className="flex flex-wrap">
					<IconButton sx={borderRadius} color="primary">
						<ArrowLine />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<BiDirectionalArrowLine />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<ParallelArrowLine />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<TextIcon />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<RectangleShape />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<CircleShape />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<DiamondShape />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<TriangleShape />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<EllipticalShape />
					</IconButton>
				</AccordionDetails>
			</Accordion>
			<Divider orientation="horizontal" flexItem />
			<Accordion className="!m-0">
				<AccordionSummary id="software" className="kts-section-header"
				expandIcon={<ExpandMoreIcon />}>
					Software
				</AccordionSummary>
				<Divider orientation="horizontal" flexItem />
				<AccordionDetails className="flex flex-wrap">
					<IconButton sx={borderRadius} color="primary">
						<Database />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<Server />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<MultipleServer />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<LambdaFunction />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<LoadBalancer />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<Nginx />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<Redis />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<MessageQueue />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<User />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<CDN />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<VirtualMachine />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<CloudStorage />
					</IconButton>
					<IconButton sx={borderRadius} color="primary">
						<Kubernetes />
					</IconButton>
				</AccordionDetails>
			</Accordion>
		</div>
    );
}