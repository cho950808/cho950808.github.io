import React, { useState } from 'react';
import project from '../tmp/project';
import ProjectItem from './item/ProjectsItem';
import { Table } from '../components/ui';

const { Tr, Th, Td, THead, TBody } = Table;

const Projects = () => {
    const [info, setInfo] = useState(project);

    return (
        <div id="projects" className="max-w-[1240px] m-auto p-2 flex items-center py-16 grid grid-cols-1">
            <p className="uppercase text-xl tracking-widest text-[#6fa2c7]">Projects</p>
            {info.map((item, index) => {
                return <ProjectItem item={item} key={`project_${index}`} />;
            })}

            <div>
                <Table>
                    <THead>
                        <Tr>
                            <Th>Company</Th>
                            <Th>Contact</Th>
                            <Th>Country</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        <Tr>
                            <Td>Alfreds Futterkiste</Td>
                            <Td>Maria Anders</Td>
                            <Td>Germany</Td>
                        </Tr>
                        <Tr>
                            <Td>Centro comercial Moctezuma</Td>
                            <Td>Francisco Chang</Td>
                            <Td>Mexico</Td>
                        </Tr>
                        <Tr>
                            <Td>Ernst Handel</Td>
                            <Td>Roland Mendel</Td>
                            <Td>Austria</Td>
                        </Tr>
                    </TBody>
                </Table>
            </div>
        </div>
    );
};

export default Projects;
