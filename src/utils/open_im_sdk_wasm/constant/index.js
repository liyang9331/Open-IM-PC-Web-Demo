export const DatabaseErrorCode = {
    ErrorInit: 10001,
    ErrorNoRecord: 10002,
    ErrorDBTimeout: 10003,
};
export var CbEvents;
(function (CbEvents) {
    CbEvents["LOGIN"] = "Login";
    CbEvents["ONCONNECTFAILED"] = "OnConnectFailed";
    CbEvents["ONCONNECTSUCCESS"] = "OnConnectSuccess";
    CbEvents["ONCONNECTING"] = "OnConnecting";
    CbEvents["ONKICKEDOFFLINE"] = "OnKickedOffline";
    CbEvents["ONSELFINFOUPDATED"] = "OnSelfInfoUpdated";
    CbEvents["ONUSERTOKENEXPIRED"] = "OnUserTokenExpired";
    CbEvents["ONPROGRESS"] = "OnProgress";
    CbEvents["ONRECVNEWMESSAGE"] = "OnRecvNewMessage";
    CbEvents["ONRECVNEWMESSAGES"] = "OnRecvNewMessages";
    CbEvents["ONRECVMESSAGEREVOKED"] = "OnRecvMessageRevoked";
    CbEvents["ONNEWRECVMESSAGEREVOKED"] = "OnNewRecvMessageRevoked";
    CbEvents["ONRECVC2CREADRECEIPT"] = "OnRecvC2CReadReceipt";
    CbEvents["ONRECVGROUPREADRECEIPT"] = "OnRecvGroupReadReceipt";
    CbEvents["ONCONVERSATIONCHANGED"] = "OnConversationChanged";
    CbEvents["ONNEWCONVERSATION"] = "OnNewConversation";
    CbEvents["ONSYNCSERVERFAILED"] = "OnSyncServerFailed";
    CbEvents["ONSYNCSERVERFINISH"] = "OnSyncServerFinish";
    CbEvents["ONSYNCSERVERSTART"] = "OnSyncServerStart";
    CbEvents["ONTOTALUNREADMESSAGECOUNTCHANGED"] = "OnTotalUnreadMessageCountChanged";
    CbEvents["ONBLACKADDED"] = "OnBlackAdded";
    CbEvents["ONBLACKDELETED"] = "OnBlackDeleted";
    CbEvents["ONFRIENDAPPLICATIONACCEPTED"] = "OnFriendApplicationAccepted";
    CbEvents["ONFRIENDAPPLICATIONADDED"] = "OnFriendApplicationAdded";
    CbEvents["ONFRIENDAPPLICATIONDELETED"] = "OnFriendApplicationDeleted";
    CbEvents["ONFRIENDAPPLICATIONREJECTED"] = "OnFriendApplicationRejected";
    CbEvents["ONFRIENDINFOCHANGED"] = "OnFriendInfoChanged";
    CbEvents["ONFRIENDADDED"] = "OnFriendAdded";
    CbEvents["ONFRIENDDELETED"] = "OnFriendDeleted";
    CbEvents["ONJOINEDGROUPADDED"] = "OnJoinedGroupAdded";
    CbEvents["ONJOINEDGROUPDELETED"] = "OnJoinedGroupDeleted";
    CbEvents["ONGROUPMEMBERADDED"] = "OnGroupMemberAdded";
    CbEvents["ONGROUPMEMBERDELETED"] = "OnGroupMemberDeleted";
    CbEvents["ONGROUPAPPLICATIONADDED"] = "OnGroupApplicationAdded";
    CbEvents["ONGROUPAPPLICATIONDELETED"] = "OnGroupApplicationDeleted";
    CbEvents["ONGROUPINFOCHANGED"] = "OnGroupInfoChanged";
    CbEvents["ONGROUPMEMBERINFOCHANGED"] = "OnGroupMemberInfoChanged";
    CbEvents["ONGROUPAPPLICATIONACCEPTED"] = "OnGroupApplicationAccepted";
    CbEvents["ONGROUPAPPLICATIONREJECTED"] = "OnGroupApplicationRejected";
    CbEvents["ONRECEIVENEWINVITATION"] = "OnReceiveNewInvitation";
    CbEvents["ONINVITEEACCEPTED"] = "OnInviteeAccepted";
    CbEvents["ONINVITEEREJECTED"] = "OnInviteeRejected";
    CbEvents["ONINVITATIONCANCELLED"] = "OnInvitationCancelled";
    CbEvents["ONHANGUP"] = "OnHangUp";
    CbEvents["ONINVITATIONTIMEOUT"] = "OnInvitationTimeout";
    CbEvents["ONINVITEEACCEPTEDBYOTHERDEVICE"] = "OnInviteeAcceptedByOtherDevice";
    CbEvents["ONINVITEEREJECTEDBYOTHERDEVICE"] = "OnInviteeRejectedByOtherDevice";
    CbEvents["ONORGANIZATIONUPDATED"] = "OnOrganizationUpdated";
})(CbEvents || (CbEvents = {}));
export var RequestFunc;
(function (RequestFunc) {
    RequestFunc["INITSDK"] = "InitSDK";
    RequestFunc["LOGIN"] = "Login";
    RequestFunc["LOGOUT"] = "Logout";
    RequestFunc["GETLOGINSTATUS"] = "GetLoginStatus";
    RequestFunc["GETLOGINUSER"] = "GetLoginUser";
    RequestFunc["GETSELFUSERINFO"] = "GetSelfUserInfo";
    RequestFunc["CREATETEXTMESSAGE"] = "CreateTextMessage";
    RequestFunc["CREATETEXTATMESSAGE"] = "CreateTextAtMessage";
    RequestFunc["CREATEADVANCEDTEXTMESSAGE"] = "CreateAdvancedTextMessage";
    RequestFunc["CREATEADVANCEDQUOTEMESSAGE"] = "CreateAdvancedQuoteMessage";
    RequestFunc["CREATEIMAGEMESSAGEFROMBYURL"] = "CreateImageMessageByURL";
    RequestFunc["CREATESOUNDMESSAGEBYURL"] = "CreateSoundMessageByURL";
    RequestFunc["CREATEVIDEOMESSAGEBYURL"] = "CreateVideoMessageByURL";
    RequestFunc["CREATEFILEMESSAGEBYURL"] = "CreateFileMessageByURL";
    RequestFunc["CREATEIMAGEMESSAGEFROMFULLPATH"] = "CreateImageMessageFromFullPath";
    RequestFunc["CREATESOUNDMESSAGEFROMFULLPATH"] = "CreateSoundMessageFromFullPath";
    RequestFunc["CREATEVIDEOMESSAGEFROMFULLPATH"] = "CreateVideoMessageFromFullPath";
    RequestFunc["CREATEFILEMESSAGEFROMFULLPATH"] = "CreateFileMessageFromFullPath";
    RequestFunc["CREATELOCATIONMESSAGE"] = "CreateLocationMessage";
    RequestFunc["CREATECUSTOMMESSAGE"] = "CreateCustomMessage";
    RequestFunc["CREATEMERGERMESSAGE"] = "CreateMergerMessage";
    RequestFunc["CREATEFORWARDMESSAGE"] = "CreateForwardMessage";
    RequestFunc["CREATEQUOTEMESSAGE"] = "CreateQuoteMessage";
    RequestFunc["CREATECARDMESSAGE"] = "CreateCardMessage";
    RequestFunc["CREATEFACEMESSAGE"] = "CreateFaceMessage";
    RequestFunc["SENDMESSAGE"] = "SendMessage";
    RequestFunc["SENDMESSAGENOTOSS"] = "SendMessageNotOss";
    RequestFunc["GETHISTORYMESSAGELIST"] = "GetHistoryMessageList";
    RequestFunc["GETADVANCEDHISTORYMESSAGELIST"] = "GetAdvancedHistoryMessageList";
    RequestFunc["GETHISTORYMESSAGELISTREVERSE"] = "GetHistoryMessageListReverse";
    RequestFunc["REVOKEMESSAGE"] = "RevokeMessage";
    RequestFunc["SETONECONVERSATIONPRIVATECHAT"] = "SetOneConversationPrivateChat";
    RequestFunc["DELETEMESSAGEFROMLOCALSTORAGE"] = "DeleteMessageFromLocalStorage";
    RequestFunc["DELETEMESSAGEFROMLOCALANDSVR"] = "DeleteMessageFromLocalAndSvr";
    RequestFunc["DELETECONVERSATIONFROMLOCALANDSVR"] = "DeleteConversationFromLocalAndSvr";
    RequestFunc["DELETEALLCONVERSATIONFROMLOCAL"] = "DeleteAllConversationFromLocal";
    RequestFunc["DELETEALLMSGFROMLOCALANDSVR"] = "DeleteAllMsgFromLocalAndSvr";
    RequestFunc["DELETEALLMSGFROMLOCAL"] = "DeleteAllMsgFromLocal";
    RequestFunc["MARKSINGLEMESSAGEHASREAD"] = "MarkSingleMessageHasRead";
    RequestFunc["INSERTSINGLEMESSAGETOLOCALSTORAGE"] = "InsertSingleMessageToLocalStorage";
    RequestFunc["INSERTGROUPMESSAGETOLOCALSTORAGE"] = "InsertGroupMessageToLocalStorage";
    RequestFunc["TYPINGSTATUSUPDATE"] = "TypingStatusUpdate";
    RequestFunc["MARKC2CMESSAGEASREAD"] = "MarkC2CMessageAsRead";
    RequestFunc["MARKMESSAGEASREADBYCONID"] = "MarkMessageAsReadByConID";
    RequestFunc["CLEARC2CHISTORYMESSAGE"] = "ClearC2CHistoryMessage";
    RequestFunc["CLEARC2CHISTORYMESSAGEFROMLOCALANDSVR"] = "ClearC2CHistoryMessageFromLocalAndSvr";
    RequestFunc["CLEARGROUPHISTORYMESSAGE"] = "ClearGroupHistoryMessage";
    RequestFunc["CLEARGROUPHISTORYMESSAGEFROMLOCALANDSVR"] = "ClearGroupHistoryMessageFromLocalAndSvr";
    RequestFunc["ADDFRIEND"] = "AddFriend";
    RequestFunc["SEARCHFRIENDS"] = "SearchFriends";
    RequestFunc["GETDESIGNATEDFRIENDSINFO"] = "GetDesignatedFriendsInfo";
    RequestFunc["GETRECVFRIENDAPPLICATIONLIST"] = "GetRecvFriendApplicationList";
    RequestFunc["GETSENDFRIENDAPPLICATIONLIST"] = "GetSendFriendApplicationList";
    RequestFunc["GETFRIENDLIST"] = "GetFriendList";
    RequestFunc["SETFRIENDREMARK"] = "SetFriendRemark";
    RequestFunc["ADDBLACK"] = "AddBlack";
    RequestFunc["GETBLACKLIST"] = "GetBlackList";
    RequestFunc["REMOVEBLACK"] = "RemoveBlack";
    RequestFunc["CHECKFRIEND"] = "CheckFriend";
    RequestFunc["ACCEPTFRIENDAPPLICATION"] = "AcceptFriendApplication";
    RequestFunc["REFUSEFRIENDAPPLICATION"] = "RefuseFriendApplication";
    RequestFunc["DELETEFRIEND"] = "DeleteFriend";
    RequestFunc["GETUSERSINFO"] = "GetUsersInfo";
    RequestFunc["SETSELFINFO"] = "SetSelfInfo";
    RequestFunc["GETALLCONVERSATIONLIST"] = "GetAllConversationList";
    RequestFunc["GETCONVERSATIONLISTSPLIT"] = "GetConversationListSplit";
    RequestFunc["GETONECONVERSATION"] = "GetOneConversation";
    RequestFunc["GETCONVERSATIONIDBYSESSIONTYPE"] = "GetConversationIDBySessionType";
    RequestFunc["GETMULTIPLECONVERSATION"] = "GetMultipleConversation";
    RequestFunc["DELETECONVERSATION"] = "DeleteConversation";
    RequestFunc["SETCONVERSATIONDRAFT"] = "SetConversationDraft";
    RequestFunc["PINCONVERSATION"] = "PinConversation";
    RequestFunc["GETTOTALUNREADMSGCOUNT"] = "GetTotalUnreadMsgCount";
    RequestFunc["GETCONVERSATIONRECVMESSAGEOPT"] = "GetConversationRecvMessageOpt";
    RequestFunc["SETCONVERSATIONRECVMESSAGEOPT"] = "SetConversationRecvMessageOpt";
    RequestFunc["SEARCHLOCALMESSAGES"] = "SearchLocalMessages";
    RequestFunc["MARKGROUPMESSAGEHASREAD"] = "MarkGroupMessageHasRead";
    RequestFunc["MARKGROUPMESSAGEASREAD"] = "MarkGroupMessageAsRead";
    RequestFunc["INVITEUSERTOGROUP"] = "InviteUserToGroup";
    RequestFunc["KICKGROUPMEMBER"] = "KickGroupMember";
    RequestFunc["GETGROUPMEMBERSINFO"] = "GetGroupMembersInfo";
    RequestFunc["GETGROUPMEMBERLIST"] = "GetGroupMemberList";
    RequestFunc["GETGROUPMEMBERLISTBYJOINTIME"] = "GetGroupMemberListByJoinTime";
    RequestFunc["GETJOINEDGROUPLIST"] = "GetJoinedGroupList";
    RequestFunc["CREATEGROUP"] = "CreateGroup";
    RequestFunc["SETGROUPINFO"] = "SetGroupInfo";
    RequestFunc["SETGROUPMEMBERNICKNAME"] = "SetGroupMemberNickname";
    RequestFunc["GETGROUPSINFO"] = "GetGroupsInfo";
    RequestFunc["JOINGROUP"] = "JoinGroup";
    RequestFunc["SEARCHGROUPS"] = "SearchGroups";
    RequestFunc["QUITGROUP"] = "QuitGroup";
    RequestFunc["DISMISSGROUP"] = "DismissGroup";
    RequestFunc["CHANGEGROUPMUTE"] = "ChangeGroupMute";
    RequestFunc["CHANGEGROUPMEMBERMUTE"] = "ChangeGroupMemberMute";
    RequestFunc["TRANSFERGROUPOWNER"] = "TransferGroupOwner";
    RequestFunc["GETSENDGROUPAPPLICATIONLIST"] = "GetSendGroupApplicationList";
    RequestFunc["GETRECVGROUPAPPLICATIONLIST"] = "GetRecvGroupApplicationList";
    RequestFunc["ACCEPTGROUPAPPLICATION"] = "AcceptGroupApplication";
    RequestFunc["REFUSEGROUPAPPLICATION"] = "RefuseGroupApplication";
    RequestFunc["SIGNAL_INGINVITE"] = "SignalingInvite";
    RequestFunc["SIGNALINGINVITEINGROUP"] = "SignalingInviteInGroup";
    RequestFunc["SIGNALINGACCEPT"] = "SignalingAccept";
    RequestFunc["SIGNALINGREJECT"] = "SignalingReject";
    RequestFunc["SIGNALINGCANCEL"] = "SignalingCancel";
    RequestFunc["SIGNALINGHUNGUP"] = "SignalingHungUp";
    RequestFunc["GETSUBDEPARTMENT"] = "GetSubDepartment";
    RequestFunc["GETDEPARTMENTMEMBER"] = "GetDepartmentMember";
    RequestFunc["GETUSERINDEPARTMENT"] = "GetUserInDepartment";
    RequestFunc["GETDEPARTMENTMEMBERANDSUBDEPARTMENT"] = "GetDepartmentMemberAndSubDepartment";
    RequestFunc["GETDEPARTMENTINFO"] = "GetDepartmentInfo";
    RequestFunc["SEARCHORGANIZATION"] = "SearchOrganization";
    RequestFunc["RESETCONVERSATIONGROUPATTYPE"] = "ResetConversationGroupAtType";
    RequestFunc["SETGROUPMEMBERROLELEVEL"] = "SetGroupMemberRoleLevel";
    RequestFunc["SETGROUPVERIFICATION"] = "SetGroupVerification";
    RequestFunc["SETGLOBALRECVMESSAGEOPT"] = "SetGlobalRecvMessageOpt";
})(RequestFunc || (RequestFunc = {}));
