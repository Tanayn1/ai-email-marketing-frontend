'use client'
import React, { useEffect, useState } from 'react'
import { EditorSession } from '../../../../../types/types';
import { fetchEditSessions } from '../../actions';

export default function CreateCampaignForm() {
    const [selectedEmail, setSelectedEmail] = useState<null | string>(null);
    const [sessions, setSessions] = useState<null | Array<EditorSession>>(null);

    const fetchData = async () => {
        const data: Array<EditorSession> = await fetchEditSessions();
        setSessions(data);
      }
    
      useEffect(()=>{
        fetchData()
      }, []);
  if (selectedEmail === null) {
    return (
    <div>
        
    </div>
  ) 
} else {
    return (
        <div>
            
        </div>
    )
}
}
